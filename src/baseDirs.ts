export interface BaseDirs {
  homeDir: string;
  cacheDir: string;
  configDir: string;
  dataDir: string;
  dataLocalDir: string;
  preferenceDir: string;
}

export function load(): BaseDirs {
  const bd: BaseDirs = {
    homeDir: "",
    cacheDir: "",
    configDir: "",
    dataDir: "",
    dataLocalDir: "",
    preferenceDir: "",
  };

  switch (Deno.build.os) {
    case "linux":
      bd.homeDir = Deno.env.get("HOME") || "virtualHome";
      bd.cacheDir = `${bd.homeDir}/.cache`;
      bd.configDir = `${bd.homeDir}/.config`;
      bd.dataDir = `${bd.homeDir}/.local/share`;
      bd.dataLocalDir = `${bd.homeDir}/.local/share`;
      bd.preferenceDir = `${bd.homeDir}/.config`;
      break;

    case "darwin":
      bd.homeDir = Deno.env.get("HOME") || "virtualHome";
      bd.cacheDir = `${bd.homeDir}/Library/Caches`;
      bd.configDir = `${bd.homeDir}/Library/Application Support`;
      bd.dataDir = `${bd.homeDir}/Library/Application Support`;
      bd.dataLocalDir = `${bd.homeDir}/Library/Application Support`;
      bd.preferenceDir = `${bd.homeDir}/Library/Preferences`;
      break;

    case "windows":
      bd.homeDir = Deno.env.get("USERPROFILE") || "virtualHome";
      bd.cacheDir = `${bd.homeDir}\\AppData\\Local`;
      bd.configDir = `${bd.configDir}\\AppData\\Roaming`;
      bd.dataDir = `${bd.configDir}\\AppData\\Roaming`;
      bd.dataLocalDir = `${bd.configDir}\\AppData\\Local`;
      bd.preferenceDir = `${bd.configDir}\\AppData\\Roaming`;
      break;
  }

  return bd;
}
