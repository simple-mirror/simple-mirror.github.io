const RELEASES_URL = "https://github.com/moltenib/simple-mirror/releases/latest";
const LATEST_MANIFEST_URL = "https://github.com/moltenib/simple-mirror/releases/latest/download/manifest.json";
const LATEST_RELEASE_API = "https://api.github.com/repos/moltenib/simple-mirror/releases/latest";
const STORAGE_KEY = "simple_mirror_site_language";
const translation_map = window.simple_mirror_translations;

if (!translation_map || !translation_map.en) {
  throw new Error("translations.js did not load");
}

const language_select = document.getElementById("language_select");
const download_button = document.getElementById("download_button");
const manifest_link = document.getElementById("manifest_link");
const version_value = document.getElementById("version_value");
const installer_value = document.getElementById("installer_value");
const size_value = document.getElementById("size_value");
const sha256_value = document.getElementById("sha256_value");
const default_installer_name = installer_value.textContent;

const release_data = {
  loading: true,
  version: null,
  installer_name: null,
  installer_size: null,
  installer_sha256: null
};

let current_language = "en";

function normalize_language(value) {
  if (!value) {
    return null;
  }

  const normalized_value = String(value).trim().replace("_", "-").toLowerCase();
  if (normalized_value === "zh-cn") {
    return "zh-CN";
  }

  const exact_language = Object.keys(translation_map).find((key) => key.toLowerCase() === normalized_value);
  if (exact_language) {
    return exact_language;
  }

  const short_language = normalized_value.split("-")[0];
  return translation_map[short_language] ? short_language : null;
}

function string_for(key) {
  return translation_map[current_language]?.[key] ?? translation_map.en[key] ?? "";
}

function resolve_initial_language() {
  const url_language = normalize_language(new URL(window.location.href).searchParams.get("lang"));
  if (url_language) {
    return url_language;
  }

  try {
    const stored_language = normalize_language(window.localStorage.getItem(STORAGE_KEY));
    if (stored_language) {
      return stored_language;
    }
  } catch (_error) {
  }

  const browser_languages = Array.isArray(navigator.languages) ? navigator.languages : [navigator.language];
  for (const entry of browser_languages) {
    const browser_language = normalize_language(entry);
    if (browser_language) {
      return browser_language;
    }
  }

  return "en";
}

function format_size(bytes) {
  if (!bytes || !Number.isFinite(bytes)) {
    return "—";
  }

  const formatter = new Intl.NumberFormat(current_language, { maximumFractionDigits: 1 });
  return `${formatter.format(bytes / (1024 * 1024))} MB`;
}

function render_release_data() {
  version_value.textContent = release_data.loading ? string_for("loading_label") : (release_data.version || "—");
  installer_value.textContent = release_data.installer_name || default_installer_name;
  size_value.textContent = release_data.installer_size ? format_size(release_data.installer_size) : "—";
  sha256_value.textContent = release_data.installer_sha256 || "—";
}

function apply_language() {
  document.documentElement.lang = current_language;
  document.title = string_for("app_name");

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = string_for(node.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-html]").forEach((node) => {
    node.innerHTML = string_for(node.dataset.i18nHtml);
  });

  render_release_data();
}

function set_language(language, options = {}) {
  current_language = language;
  language_select.value = language;
  apply_language();

  if (!options.skip_storage) {
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch (_error) {
    }
  }

  if (!options.skip_url) {
    const url = new URL(window.location.href);
    if (language === "en") {
      url.searchParams.delete("lang");
    } else {
      url.searchParams.set("lang", language);
    }
    window.history.replaceState({}, "", url);
  }
}

async function load_release_information() {
  const [manifest_result, release_result] = await Promise.allSettled([
    fetch(LATEST_MANIFEST_URL, { cache: "no-store" }).then((response) => {
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      return response.json();
    }),
    fetch(LATEST_RELEASE_API, {
      headers: { Accept: "application/vnd.github+json" },
      cache: "no-store"
    }).then((response) => {
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      return response.json();
    })
  ]);

  const manifest = manifest_result.status === "fulfilled" ? manifest_result.value : null;
  const release = release_result.status === "fulfilled" ? release_result.value : null;
  const installer_asset = release && Array.isArray(release.assets)
    ? release.assets.find((asset) => asset.name.endsWith(".exe"))
    : null;
  release_data.loading = false;
  release_data.version =
    (manifest && manifest.version) ||
    String(release && (release.tag_name || release.name) || "").replace(/^v/i, "") ||
    null;
  release_data.installer_name =
    (manifest && manifest.installer && manifest.installer.name) ||
    (installer_asset && installer_asset.name) ||
    null;
  release_data.installer_size =
    (manifest && manifest.installer && manifest.installer.size) ||
    (installer_asset && installer_asset.size) ||
    null;
  release_data.installer_sha256 =
    (manifest && manifest.installer && manifest.installer.sha256) ||
    String(installer_asset && installer_asset.digest || "").replace(/^sha256:/i, "") ||
    null;

  download_button.href =
    (manifest && manifest.installer && manifest.installer.url) ||
    (installer_asset && installer_asset.browser_download_url) ||
    RELEASES_URL;
  manifest_link.hidden = Boolean(manifest || release);

  render_release_data();
}

set_language(resolve_initial_language(), { skip_storage: true });

language_select.addEventListener("change", (event) => {
  set_language(normalize_language(event.target.value) || "en");
});

load_release_information().catch(() => {
  release_data.loading = false;
  download_button.href = RELEASES_URL;
  manifest_link.hidden = false;
  render_release_data();
});
