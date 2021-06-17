import { baseDirs } from "../mod.ts";

export interface UserDirs {
  homeDir: string;
  musicDir: string;
  desktopDir: string;
  documentDir: string;
  downloadDir: string;
  fontDir: string;
  pictureDir: string;
  publicDir: string;
  videoDir: string;
}

/**
 * @deprecated The function `load` was replaced by `setup`
 */
export function load(): UserDirs {
  const result = setup();
  return result;
}

export function setup(): UserDirs {
  const base = baseDirs.setup();
  const dirs = {
    homeDir: base.homeDir,
    musicDir: "",
    desktopDir: "",
    documentDir: "",
    downloadDir: "",
    fontDir: "",
    pictureDir: "",
    publicDir: "",
    videoDir: "",
  };

  switch (Deno.build.os) {
    case "linux":
      dirs.musicDir = Deno.env.get("XDG_MUSIC_DIR") || `${dirs.homeDir}/Music`;
      dirs.desktopDir = Deno.env.get("XDG_DESKTOP_DIR") ||
        `${dirs.homeDir}/Desktop`;
      dirs.documentDir = Deno.env.get("XDG_DOCUMENTS_DIR") ||
        `${dirs.homeDir}/Documents`;
      dirs.downloadDir = Deno.env.get("XDG_DOWNLOAD_DIR") ||
        `${dirs.homeDir}/Downloads`;
      dirs.fontDir = Deno.env.get("XDG_DATA_HOME")
        ? `${Deno.env.get("XDG_DATA_HOME")}/fonts`
        : undefined || `${base.dataDir}/fonts`;
      dirs.pictureDir = Deno.env.get("XDG_PICTURES_DIR") ||
        `${dirs.homeDir}/Pictures`;
      dirs.publicDir = Deno.env.get("XDG_PUBLICSHARE_DIR") ||
        `${dirs.homeDir}/Public`;
      dirs.videoDir = Deno.env.get("XDG_VIDEOS_DIR") ||
        `${dirs.homeDir}/Videos`;
      break;

    case "darwin":
      dirs.musicDir = `${dirs.homeDir}/Music`;
      dirs.desktopDir = `${dirs.homeDir}/Desktop`;
      dirs.documentDir = `${dirs.homeDir}/Documents`;
      dirs.downloadDir = `${dirs.homeDir}/Downloads`;
      dirs.fontDir = `${dirs.homeDir}/Library/Fonts`;
      dirs.pictureDir = `${dirs.homeDir}/Pictures`;
      dirs.publicDir = `${dirs.homeDir}/Public`;
      dirs.videoDir = `${dirs.videoDir}/Movies`;
      break;

    case "windows":
      dirs.musicDir = `${dirs.homeDir}\\Music`;
      dirs.desktopDir = `${dirs.homeDir}\\Desktop`;
      dirs.documentDir = `${dirs.homeDir}\\Documents`;
      dirs.downloadDir = `${dirs.homeDir}\\Downloads`;
      dirs.fontDir = "C:\\Windows\\fonts";
      dirs.pictureDir = `${dirs.homeDir}\\Pictures`;
      dirs.publicDir = `${dirs.publicDir}\\Public`;
      dirs.videoDir = `${dirs.videoDir}\\Videos`;
      break;
  }

  return dirs;
}
