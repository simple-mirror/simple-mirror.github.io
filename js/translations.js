const translations_release_url = "https://github.com/moltenib/simple-mirror/releases/latest";
const translations_rsync_url = "https://rsync.samba.org/";
const translations_gpl_url = "https://www.gnu.org/licenses/gpl-3.0.html";
const translation_app_names = {
  en: "Simple Mirror",
  de: "Einfacher Spiegel",
  es: "Espejo simple",
  fr: "Miroir simple",
  it: "Specchio semplice",
  ja: "シンプルミラー",
  nl: "Eenvoudige spiegel",
  pt: "Espelho simples",
  "zh-CN": "简易镜像"
};

window.simple_mirror_translations = {
  en: {
    app_name: translation_app_names.en,
    language_label: "Language",
    title: "Welcome!",
    description_html: `${translation_app_names.en} is an <a href="${translations_rsync_url}" target="_blank" rel="noreferrer">rsync</a> wrapper for quick one-way back-ups. Choose an origin folder, connect a back-up medium as the destination, then synchronize to turn the destination into a mirror of the origin.`,
    download_label: "Download",
    version_label: "Latest version",
    installer_label: "Installer",
    size_label: "Size",
    sha256_label: "SHA256",
    loading_label: "Loading latest release...",
    manifest_label: "Open manifest.json",
    source_hint_html: `This release is available on <a href="${translations_release_url}" target="_blank" rel="noreferrer">GitHub</a>.`,
    footer_html: `${translation_app_names.en} is free software released under the <a href="${translations_gpl_url}" target="_blank" rel="noreferrer">GNU GPL 3.0</a>.`
  },
  de: {
    app_name: translation_app_names.de,
    language_label: "Sprache",
    title: "Willkommen!",
    description_html: `${translation_app_names.de} ist ein <a href="${translations_rsync_url}" target="_blank" rel="noreferrer">rsync</a>-Wrapper für schnelle Einweg-Back-ups. Wählen Sie einen Ursprungsordner, verbinden Sie ein Back-up-Medium als Ziel und synchronisieren Sie dann, um das Ziel in ein Spiegelbild des Ursprungs zu verwandeln.`,
    download_label: "Herunterladen",
    version_label: "Neueste Version",
    installer_label: "Installationsdatei",
    size_label: "Größe",
    manifest_label: "manifest.json öffnen",
    source_hint_html: `Dieses Release ist auf <a href="${translations_release_url}" target="_blank" rel="noreferrer">GitHub</a> verfügbar.`,
    footer_html: `${translation_app_names.de} ist freie Software unter der <a href="${translations_gpl_url}" target="_blank" rel="noreferrer">GNU GPL 3.0</a>.`
  },
  es: {
    app_name: translation_app_names.es,
    language_label: "Idioma",
    title: "¡Bienvenido!",
    description_html: `${translation_app_names.es} es un contenedor de <a href="${translations_rsync_url}" target="_blank" rel="noreferrer">rsync</a> para copias de seguridad unidireccionales rápidas. Elija una carpeta de origen, conecte un medio de copia de seguridad como destino y luego sincronice para convertir el destino en un espejo del origen.`,
    download_label: "Descargar",
    version_label: "Última versión",
    installer_label: "Instalador",
    size_label: "Tamaño",
    manifest_label: "Abrir manifest.json",
    source_hint_html: `Esta versión está disponible en <a href="${translations_release_url}" target="_blank" rel="noreferrer">GitHub</a>.`,
    footer_html: `${translation_app_names.es} es software libre publicado bajo la <a href="${translations_gpl_url}" target="_blank" rel="noreferrer">GNU GPL 3.0</a>.`
  },
  fr: {
    app_name: translation_app_names.fr,
    language_label: "Langue",
    title: "Bienvenue !",
    description_html: `${translation_app_names.fr} est un conteneur <a href="${translations_rsync_url}" target="_blank" rel="noreferrer">rsync</a> pour des sauvegardes unidirectionnelles rapides. Choisissez un dossier source, branchez un support de sauvegarde comme destination, puis synchronisez pour transformer la destination en miroir de la source.`,
    download_label: "Télécharger",
    version_label: "Dernière version",
    installer_label: "Installeur",
    size_label: "Taille",
    manifest_label: "Ouvrir manifest.json",
    source_hint_html: `Cette version est disponible sur <a href="${translations_release_url}" target="_blank" rel="noreferrer">GitHub</a>.`,
    footer_html: `${translation_app_names.fr} est un logiciel libre distribué sous <a href="${translations_gpl_url}" target="_blank" rel="noreferrer">GNU GPL 3.0</a>.`
  },
  it: {
    app_name: translation_app_names.it,
    language_label: "Lingua",
    title: "Benvenuto!",
    description_html: `${translation_app_names.it} è un wrapper di <a href="${translations_rsync_url}" target="_blank" rel="noreferrer">rsync</a> per backup unidirezionali rapidi. Scegli una cartella di origine, collega un supporto di backup come destinazione e poi sincronizza per trasformare la destinazione in uno specchio dell'origine.`,
    download_label: "Scarica",
    version_label: "Ultima versione",
    installer_label: "Installatore",
    size_label: "Dimensione",
    manifest_label: "Apri manifest.json",
    source_hint_html: `Questa release è disponibile su <a href="${translations_release_url}" target="_blank" rel="noreferrer">GitHub</a>.`,
    footer_html: `${translation_app_names.it} è software libero distribuito con <a href="${translations_gpl_url}" target="_blank" rel="noreferrer">GNU GPL 3.0</a>.`
  },
  ja: {
    app_name: translation_app_names.ja,
    language_label: "言語",
    title: "ようこそ!",
    description_html: `${translation_app_names.ja} は <a href="${translations_rsync_url}" target="_blank" rel="noreferrer">rsync</a> のラッパーで、すばやい一方向バックアップを簡単に行えます。元になるフォルダーを選び、バックアップ用メディアを保存先として接続してから同期すると、保存先は元のフォルダーのミラーになります。`,
    download_label: "ダウンロード",
    version_label: "最新バージョン",
    installer_label: "インストーラー",
    size_label: "サイズ",
    manifest_label: "manifest.json を開く",
    source_hint_html: `このリリースは <a href="${translations_release_url}" target="_blank" rel="noreferrer">GitHub</a> で入手できます。`,
    footer_html: `${translation_app_names.ja} は <a href="${translations_gpl_url}" target="_blank" rel="noreferrer">GNU GPL 3.0</a> で公開されている自由ソフトウェアです。`
  },
  nl: {
    app_name: translation_app_names.nl,
    language_label: "Taal",
    title: "Welkom!",
    description_html: `${translation_app_names.nl} is een <a href="${translations_rsync_url}" target="_blank" rel="noreferrer">rsync</a>-wrapper voor snelle eenrichtingsback-ups. Kies een bronmap, sluit een back-upmedium aan als bestemming en synchroniseer daarna om de bestemming in een spiegel van de bron te veranderen.`,
    download_label: "Downloaden",
    version_label: "Nieuwste versie",
    installer_label: "Installatiebestand",
    size_label: "Grootte",
    manifest_label: "manifest.json openen",
    source_hint_html: `Deze release is beschikbaar op <a href="${translations_release_url}" target="_blank" rel="noreferrer">GitHub</a>.`,
    footer_html: `${translation_app_names.nl} is vrije software onder de <a href="${translations_gpl_url}" target="_blank" rel="noreferrer">GNU GPL 3.0</a>.`
  },
  pt: {
    app_name: translation_app_names.pt,
    language_label: "Idioma",
    title: "Bem-vindo!",
    description_html: `${translation_app_names.pt} é um wrapper de <a href="${translations_rsync_url}" target="_blank" rel="noreferrer">rsync</a> para cópias de segurança rápidas de sentido único. Escolha uma pasta de origem, ligue um suporte de cópia de segurança como destino e depois sincronize para transformar o destino num espelho da origem.`,
    download_label: "Transferir",
    version_label: "Versão mais recente",
    installer_label: "Instalador",
    size_label: "Tamanho",
    manifest_label: "Abrir manifest.json",
    source_hint_html: `Esta release está disponível no <a href="${translations_release_url}" target="_blank" rel="noreferrer">GitHub</a>.`,
    footer_html: `${translation_app_names.pt} é software livre disponibilizado sob a <a href="${translations_gpl_url}" target="_blank" rel="noreferrer">GNU GPL 3.0</a>.`
  },
  "zh-CN": {
    app_name: translation_app_names["zh-CN"],
    language_label: "语言",
    title: "欢迎！",
    description_html: `${translation_app_names["zh-CN"]} 是一个基于 <a href="${translations_rsync_url}" target="_blank" rel="noreferrer">rsync</a> 的包装工具，可用于快速的单向备份。选择一个源文件夹，将备份介质连接为目标位置，然后执行同步，把目标变成源文件夹的镜像。`,
    download_label: "下载",
    version_label: "最新版本",
    installer_label: "安装程序",
    size_label: "大小",
    manifest_label: "打开 manifest.json",
    source_hint_html: `此版本可在 <a href="${translations_release_url}" target="_blank" rel="noreferrer">GitHub</a> 上获取。`,
    footer_html: `${translation_app_names["zh-CN"]} 是在 <a href="${translations_gpl_url}" target="_blank" rel="noreferrer">GNU GPL 3.0</a> 下发布的自由软件。`
  }
};
