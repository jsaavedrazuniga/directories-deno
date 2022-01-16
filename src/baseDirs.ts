export interface BaseDirs {
  homeDir: string;
  cacheDir: string;
  configDir: string;
  dataDir: string;
  dataLocalDir: string;
  preferenceDir: string;
}

export function setup(): BaseDirs {
  const dirs: BaseDirs = {
    homeDir: "",
    cacheDir: "",
    configDir: "",
    dataDir: "",
    dataLocalDir: "",
    preferenceDir: "",
  };

  switch (Deno.build.os) {
    case "linux":
      dirs.homeDir = Deno.env.get("HOME") || "virtualHome";
      dirs.cacheDir = `${dirs.homeDir}/.cache`;
      dirs.configDir = `${dirs.homeDir}/.config`;
      dirs.dataDir = `${dirs.homeDir}/.local/share`;
      dirs.dataLocalDir = `${dirs.homeDir}/.local/share`;
      dirs.preferenceDir = `${dirs.homeDir}/.config`;
      break;

    case "darwin":
      dirs.homeDir = Deno.env.get("HOME") || "virtualHome";
      dirs.cacheDir = `${dirs.homeDir}/Library/Caches`;
      dirs.configDir = `${dirs.homeDir}/Library/Application Support`;
      dirs.dataDir = `${dirs.homeDir}/Library/Application Support`;
      dirs.dataLocalDir = `${dirs.homeDir}/Library/Application Support`;
      dirs.preferenceDir = `${dirs.homeDir}/Library/Preferences`;
      break;

    case "windows":
      dirs.homeDir = Deno.env.get("USERPROFILE") || "virtualHome";
      dirs.cacheDir = `${dirs.homeDir}\\AppData\\Local`;
      dirs.configDir = `${dirs.homeDir}\\AppData\\Roaming`;
      dirs.dataDir = `${dirs.homeDir}\\AppData\\Roaming`;
      dirs.dataLocalDir = `${dirs.homeDir}\\AppData\\Local`;
      dirs.preferenceDir = `${dirs.homeDir}\\AppData\\Roaming`;
      break;
  }

  return dirs;
}
