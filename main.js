const REPO_OWNER = "moltenib";
const REPO_NAME = "simple-mirror";
const RELEASES_URL = `https://github.com/${REPO_OWNER}/${REPO_NAME}/releases/latest`;
const LATEST_INSTALLER_URL = `https://github.com/${REPO_OWNER}/${REPO_NAME}/releases/latest/download/simple-mirror-setup.exe`;
const LATEST_MANIFEST_URL = `https://github.com/${REPO_OWNER}/${REPO_NAME}/releases/latest/download/manifest.json`;
const LATEST_RELEASE_API = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/releases/latest`;

const LANGUAGE_NAMES = {
  en: "English",
  de: "Deutsch",
  es: "Español",
  fr: "Français",
  it: "Italiano",
  ja: "日本語",
  nl: "Nederlands",
  pt: "Português",
  "zh-CN": "简体中文"
};

const STRINGS = {
  en: {
    meta_title: "Simple Mirror",
    meta_description: "A lightweight landing page for Simple Mirror with live release info from GitHub.",
    brand_note: "Desktop mirroring, kept simple.",
    language_label: "Language",
    eyebrow: "Simple backup utility",
    title: "Mirror folders with less friction.",
    description: "Description placeholder: add a short overview of how Simple Mirror simplifies rsync-based mirroring here.",
    download_label: "Download",
    license_label: "GNU GPL 3.0",
    version_label: "Latest version",
    installer_label: "Installer",
    size_label: "Size",
    loading_label: "Loading latest release...",
    status_live_manifest: "Version and download were loaded from the latest manifest.json.",
    status_release_fallback: "Version and download were loaded from the latest GitHub release.",
    status_error: "GitHub could not be reached. The button below opens the releases page instead.",
    manifest_label: "Open manifest.json",
    source_hint: "Release information updates automatically from GitHub.",
    footer_copy: "Simple Mirror is free software released under the GNU GPL 3.0.",
    unknown_version: "Unavailable",
    unknown_installer: "Unavailable",
    logo_alt: "Simple Mirror logo"
  },
  de: {
    meta_title: "Simple Mirror",
    meta_description: "Eine einfache Website für Simple Mirror mit aktuellen Release-Daten von GitHub.",
    brand_note: "Desktop-Spiegelung, einfach gehalten.",
    language_label: "Sprache",
    eyebrow: "Einfache Backup-Anwendung",
    title: "Ordner spiegeln, mit weniger Reibung.",
    description: "Platzhalter für die Beschreibung: Hier kann ein kurzer Überblick stehen, wie Simple Mirror rsync-basierte Spiegelungen vereinfacht.",
    download_label: "Herunterladen",
    license_label: "GNU GPL 3.0",
    version_label: "Neueste Version",
    installer_label: "Installationsdatei",
    size_label: "Größe",
    loading_label: "Neueste Version wird geladen...",
    status_live_manifest: "Version und Download wurden aus der neuesten manifest.json geladen.",
    status_release_fallback: "Version und Download wurden aus dem neuesten GitHub-Release geladen.",
    status_error: "GitHub ist momentan nicht erreichbar. Die Schaltfläche unten öffnet stattdessen die Release-Seite.",
    manifest_label: "manifest.json öffnen",
    source_hint: "Die Release-Informationen werden automatisch von GitHub aktualisiert.",
    footer_copy: "Simple Mirror ist freie Software unter der GNU GPL 3.0.",
    unknown_version: "Nicht verfügbar",
    unknown_installer: "Nicht verfügbar",
    logo_alt: "Simple-Mirror-Logo"
  },
  es: {
    meta_title: "Simple Mirror",
    meta_description: "Un sitio sencillo para Simple Mirror con datos de versiones en vivo desde GitHub.",
    brand_note: "Espejado de escritorio, sin complicaciones.",
    language_label: "Idioma",
    eyebrow: "Utilidad de copia de seguridad sencilla",
    title: "Refleja carpetas con menos fricción.",
    description: "Texto provisional: aquí puede ir una breve explicación de cómo Simple Mirror simplifica los espejos basados en rsync.",
    download_label: "Descargar",
    license_label: "GNU GPL 3.0",
    version_label: "Última versión",
    installer_label: "Instalador",
    size_label: "Tamaño",
    loading_label: "Cargando la última versión...",
    status_live_manifest: "La versión y la descarga se cargaron desde el último manifest.json.",
    status_release_fallback: "La versión y la descarga se cargaron desde la última versión publicada en GitHub.",
    status_error: "No se pudo acceder a GitHub. El botón de abajo abre la página de versiones.",
    manifest_label: "Abrir manifest.json",
    source_hint: "La información de la versión se actualiza automáticamente desde GitHub.",
    footer_copy: "Simple Mirror es software libre publicado bajo la GNU GPL 3.0.",
    unknown_version: "No disponible",
    unknown_installer: "No disponible",
    logo_alt: "Logotipo de Simple Mirror"
  },
  fr: {
    meta_title: "Simple Mirror",
    meta_description: "Un site simple pour Simple Mirror avec des informations de version mises à jour depuis GitHub.",
    brand_note: "La duplication de dossiers, tout simplement.",
    language_label: "Langue",
    eyebrow: "Utilitaire de sauvegarde simple",
    title: "Synchronisez vos dossiers avec moins de friction.",
    description: "Texte provisoire : ajoutez ici une courte présentation de la façon dont Simple Mirror simplifie les miroirs basés sur rsync.",
    download_label: "Télécharger",
    license_label: "GNU GPL 3.0",
    version_label: "Dernière version",
    installer_label: "Installeur",
    size_label: "Taille",
    loading_label: "Chargement de la dernière version...",
    status_live_manifest: "La version et le téléchargement ont été chargés depuis le dernier manifest.json.",
    status_release_fallback: "La version et le téléchargement ont été chargés depuis la dernière publication GitHub.",
    status_error: "GitHub est actuellement inaccessible. Le bouton ci-dessous ouvre la page des versions.",
    manifest_label: "Ouvrir manifest.json",
    source_hint: "Les informations de publication se mettent à jour automatiquement depuis GitHub.",
    footer_copy: "Simple Mirror est un logiciel libre distribué sous GNU GPL 3.0.",
    unknown_version: "Indisponible",
    unknown_installer: "Indisponible",
    logo_alt: "Logo de Simple Mirror"
  },
  it: {
    meta_title: "Simple Mirror",
    meta_description: "Una pagina semplice per Simple Mirror con dati di release aggiornati da GitHub.",
    brand_note: "Mirror desktop, senza complicazioni.",
    language_label: "Lingua",
    eyebrow: "Utility di backup semplice",
    title: "Specchia le cartelle con meno attrito.",
    description: "Testo segnaposto: qui puoi aggiungere una breve descrizione di come Simple Mirror semplifica i mirror basati su rsync.",
    download_label: "Scarica",
    license_label: "GNU GPL 3.0",
    version_label: "Ultima versione",
    installer_label: "Installatore",
    size_label: "Dimensione",
    loading_label: "Caricamento dell'ultima versione...",
    status_live_manifest: "Versione e download sono stati caricati dall'ultimo manifest.json.",
    status_release_fallback: "Versione e download sono stati caricati dall'ultima release GitHub.",
    status_error: "GitHub non è raggiungibile in questo momento. Il pulsante qui sotto apre invece la pagina delle release.",
    manifest_label: "Apri manifest.json",
    source_hint: "Le informazioni sulla release si aggiornano automaticamente da GitHub.",
    footer_copy: "Simple Mirror è software libero distribuito con GNU GPL 3.0.",
    unknown_version: "Non disponibile",
    unknown_installer: "Non disponibile",
    logo_alt: "Logo di Simple Mirror"
  },
  ja: {
    meta_title: "Simple Mirror",
    meta_description: "GitHub から最新リリース情報を読み込む Simple Mirror のシンプルなサイトです。",
    brand_note: "デスクトップのミラーリングを、もっとシンプルに。",
    language_label: "言語",
    eyebrow: "シンプルなバックアップツール",
    title: "フォルダーのミラーリングを、もっと簡単に。",
    description: "説明のプレースホルダー: ここに、Simple Mirror が rsync ベースのミラーリングをどう簡単にするかの短い説明を入れてください。",
    download_label: "ダウンロード",
    license_label: "GNU GPL 3.0",
    version_label: "最新バージョン",
    installer_label: "インストーラー",
    size_label: "サイズ",
    loading_label: "最新リリースを読み込み中...",
    status_live_manifest: "バージョンとダウンロードは最新の manifest.json から読み込みました。",
    status_release_fallback: "バージョンとダウンロードは最新の GitHub リリースから読み込みました。",
    status_error: "GitHub に接続できませんでした。下のボタンからリリースページを開けます。",
    manifest_label: "manifest.json を開く",
    source_hint: "リリース情報は GitHub から自動で更新されます。",
    footer_copy: "Simple Mirror は GNU GPL 3.0 で公開されている自由ソフトウェアです。",
    unknown_version: "利用不可",
    unknown_installer: "利用不可",
    logo_alt: "Simple Mirror のロゴ"
  },
  nl: {
    meta_title: "Simple Mirror",
    meta_description: "Een eenvoudige website voor Simple Mirror met live releasegegevens van GitHub.",
    brand_note: "Desktopspiegeling, eenvoudig gehouden.",
    language_label: "Taal",
    eyebrow: "Eenvoudige back-uphulp",
    title: "Spiegel mappen met minder gedoe.",
    description: "Tijdelijke beschrijving: voeg hier een korte uitleg toe over hoe Simple Mirror rsync-gebaseerde spiegeling eenvoudiger maakt.",
    download_label: "Downloaden",
    license_label: "GNU GPL 3.0",
    version_label: "Nieuwste versie",
    installer_label: "Installatiebestand",
    size_label: "Grootte",
    loading_label: "Nieuwste release laden...",
    status_live_manifest: "Versie en download zijn geladen uit de nieuwste manifest.json.",
    status_release_fallback: "Versie en download zijn geladen uit de nieuwste GitHub-release.",
    status_error: "GitHub is nu niet bereikbaar. De knop hieronder opent in plaats daarvan de releasepagina.",
    manifest_label: "manifest.json openen",
    source_hint: "Release-informatie wordt automatisch bijgewerkt vanaf GitHub.",
    footer_copy: "Simple Mirror is vrije software onder de GNU GPL 3.0.",
    unknown_version: "Niet beschikbaar",
    unknown_installer: "Niet beschikbaar",
    logo_alt: "Simple Mirror-logo"
  },
  pt: {
    meta_title: "Simple Mirror",
    meta_description: "Um site simples para o Simple Mirror com dados de release atualizados a partir do GitHub.",
    brand_note: "Espelhamento no desktop, sem complicação.",
    language_label: "Idioma",
    eyebrow: "Utilitário de cópia de segurança simples",
    title: "Espelhe pastas com menos fricção.",
    description: "Texto provisório: adicione aqui uma breve descrição de como o Simple Mirror simplifica espelhamentos baseados em rsync.",
    download_label: "Transferir",
    license_label: "GNU GPL 3.0",
    version_label: "Versão mais recente",
    installer_label: "Instalador",
    size_label: "Tamanho",
    loading_label: "A carregar a versão mais recente...",
    status_live_manifest: "A versão e a transferência foram carregadas a partir do último manifest.json.",
    status_release_fallback: "A versão e a transferência foram carregadas a partir da última release do GitHub.",
    status_error: "Não foi possível aceder ao GitHub. O botão abaixo abre a página de releases.",
    manifest_label: "Abrir manifest.json",
    source_hint: "A informação da release é atualizada automaticamente a partir do GitHub.",
    footer_copy: "O Simple Mirror é software livre disponibilizado sob a GNU GPL 3.0.",
    unknown_version: "Indisponível",
    unknown_installer: "Indisponível",
    logo_alt: "Logótipo do Simple Mirror"
  },
  "zh-CN": {
    meta_title: "Simple Mirror",
    meta_description: "一个简单的 Simple Mirror 网站，可从 GitHub 自动读取最新发布信息。",
    brand_note: "桌面镜像，更简单。",
    language_label: "语言",
    eyebrow: "简洁的备份工具",
    title: "更轻松地镜像文件夹。",
    description: "说明占位文本：可在此补充一段简短介绍，说明 Simple Mirror 如何简化基于 rsync 的镜像与备份。",
    download_label: "下载",
    license_label: "GNU GPL 3.0",
    version_label: "最新版本",
    installer_label: "安装程序",
    size_label: "大小",
    loading_label: "正在加载最新版本...",
    status_live_manifest: "版本和下载信息已从最新的 manifest.json 加载。",
    status_release_fallback: "版本和下载信息已从最新的 GitHub 发布版本加载。",
    status_error: "当前无法连接到 GitHub。下方按钮会改为打开发布页面。",
    manifest_label: "打开 manifest.json",
    source_hint: "发布信息会从 GitHub 自动更新。",
    footer_copy: "Simple Mirror 是在 GNU GPL 3.0 下发布的自由软件。",
    unknown_version: "不可用",
    unknown_installer: "不可用",
    logo_alt: "Simple Mirror 标志"
  }
};

const release_state = {
  version: null,
  installer_name: null,
  installer_size: null,
  download_url: LATEST_INSTALLER_URL,
  manifest_url: LATEST_MANIFEST_URL,
  status_key: "loading_label"
};

const language_select = document.getElementById("language_select");
const logo_image = document.getElementById("logo_image");
const download_button = document.getElementById("download_button");
const manifest_link = document.getElementById("manifest_link");
const version_value = document.getElementById("version_value");
const installer_value = document.getElementById("installer_value");
const size_value = document.getElementById("size_value");
const release_status_text = document.getElementById("release_status_text");
const description_meta = document.querySelector('meta[name="description"]');

let current_language = "en";

function normalize_language(value) {
  if (!value) {
    return null;
  }

  const simplified_value = String(value).trim().replace("_", "-").toLowerCase();

  if (simplified_value === "zh-cn") {
    return "zh-CN";
  }

  const exact_match = Object.keys(STRINGS).find((key) => key.toLowerCase() === simplified_value);
  if (exact_match) {
    return exact_match;
  }

  const short_code = simplified_value.split("-")[0];
  return Object.prototype.hasOwnProperty.call(STRINGS, short_code) ? short_code : null;
}

function get_stored_language() {
  try {
    return normalize_language(window.localStorage.getItem("simple_mirror_site_language"));
  } catch (_error) {
    return null;
  }
}

function set_stored_language(value) {
  try {
    window.localStorage.setItem("simple_mirror_site_language", value);
  } catch (_error) {
  }
}

function resolve_initial_language() {
  const url_language = normalize_language(new URL(window.location.href).searchParams.get("lang"));
  if (url_language) {
    return url_language;
  }

  const stored_language = get_stored_language();
  if (stored_language) {
    return stored_language;
  }

  const browser_languages = Array.isArray(navigator.languages) ? navigator.languages : [navigator.language];
  for (const entry of browser_languages) {
    const normalized_language = normalize_language(entry);
    if (normalized_language) {
      return normalized_language;
    }
  }

  return "en";
}

function t(key) {
  const table = STRINGS[current_language] || STRINGS.en;
  return table[key] || STRINGS.en[key] || "";
}

function format_size(bytes) {
  if (!bytes || !Number.isFinite(bytes)) {
    return "—";
  }

  const size_in_megabytes = bytes / (1024 * 1024);
  const formatter = new Intl.NumberFormat(current_language, { maximumFractionDigits: 1 });
  return `${formatter.format(size_in_megabytes)} MB`;
}

function strip_leading_v(value) {
  return value ? String(value).replace(/^v/i, "") : "";
}

function apply_static_text() {
  document.documentElement.lang = current_language;
  document.title = t("meta_title");
  description_meta.setAttribute("content", t("meta_description"));
  logo_image.alt = t("logo_alt");

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
}

function render_release_state() {
  version_value.textContent = release_state.version || t("loading_label");
  installer_value.textContent = release_state.installer_name || t("unknown_installer");
  size_value.textContent = release_state.installer_size ? format_size(release_state.installer_size) : "—";
  release_status_text.textContent = t(release_state.status_key);

  download_button.href = release_state.download_url || RELEASES_URL;
  manifest_link.href = release_state.manifest_url || LATEST_MANIFEST_URL;
}

function sync_url(language) {
  const url = new URL(window.location.href);
  if (language === "en") {
    url.searchParams.delete("lang");
  } else {
    url.searchParams.set("lang", language);
  }
  window.history.replaceState({}, "", url);
}

function set_language(language, options = {}) {
  current_language = language;
  language_select.value = language;
  apply_static_text();
  render_release_state();

  if (!options.skip_storage) {
    set_stored_language(language);
  }

  if (!options.skip_url) {
    sync_url(language);
  }
}

function populate_language_select() {
  Object.entries(LANGUAGE_NAMES).forEach(([value, label]) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    language_select.appendChild(option);
  });
}

async function fetch_json(url, options = {}) {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }
  return response.json();
}

async function load_release_information() {
  const manifest_promise = fetch_json(LATEST_MANIFEST_URL, { cache: "no-store" })
    .then((data) => ({ ok: true, data }))
    .catch(() => ({ ok: false, data: null }));

  const release_promise = fetch_json(LATEST_RELEASE_API, {
    headers: { Accept: "application/vnd.github+json" },
    cache: "no-store"
  })
    .then((data) => ({ ok: true, data }))
    .catch(() => ({ ok: false, data: null }));

  const [manifest_result, release_result] = await Promise.all([manifest_promise, release_promise]);

  const release = release_result.ok ? release_result.data : null;
  const manifest = manifest_result.ok ? manifest_result.data : null;
  const manifest_asset = release && Array.isArray(release.assets)
    ? release.assets.find((asset) => asset.name === "manifest.json")
    : null;
  const installer_asset = release && Array.isArray(release.assets)
    ? release.assets.find((asset) => asset.name.endsWith(".exe"))
    : null;

  release_state.manifest_url = (manifest_asset && manifest_asset.browser_download_url) || LATEST_MANIFEST_URL;
  release_state.download_url =
    (manifest && manifest.installer && manifest.installer.url) ||
    (installer_asset && installer_asset.browser_download_url) ||
    LATEST_INSTALLER_URL;
  release_state.installer_name =
    (manifest && manifest.installer && manifest.installer.name) ||
    (installer_asset && installer_asset.name) ||
    null;
  release_state.installer_size =
    (manifest && manifest.installer && manifest.installer.size) ||
    (installer_asset && installer_asset.size) ||
    null;
  release_state.version =
    (manifest && manifest.version) ||
    strip_leading_v(release && (release.tag_name || release.name)) ||
    null;

  if (manifest_result.ok) {
    release_state.status_key = "status_live_manifest";
  } else if (release_result.ok) {
    release_state.status_key = "status_release_fallback";
  } else {
    release_state.status_key = "status_error";
    release_state.download_url = RELEASES_URL;
  }

  render_release_state();
}

populate_language_select();
set_language(resolve_initial_language(), { skip_storage: true });

language_select.addEventListener("change", (event) => {
  const selected_language = normalize_language(event.target.value) || "en";
  set_language(selected_language);
});

load_release_information().catch(() => {
  release_state.status_key = "status_error";
  release_state.download_url = RELEASES_URL;
  render_release_state();
});
