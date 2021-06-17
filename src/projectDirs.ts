import { baseDirs } from "../mod.ts";

export interface ProjectDirs {
  cacheDir: string;
  configDir: string;
  dataDir: string;
  dataLocalDir: string;
  preferenceDir: string;
}

/**
 * @deprecated The function `load` was replaced by `setup`
 * @param qualifier
 * @param organization
 * @param application
 */
export function load(
  qualifier: string,
  organization: string,
  application: string,
) {
  setup(qualifier, organization, application);
}

/**
 * @param qualifier
 * @param organization
 * @param application
 */
export function setup(
  qualifier: string,
  organization: string,
  application: string,
): ProjectDirs {
  const base = baseDirs.setup();
  const dirs: ProjectDirs = {
    cacheDir: "",
    configDir: "",
    dataDir: "",
    dataLocalDir: "",
    preferenceDir: "",
  };

  switch (Deno.build.os) {
    case "linux":
      dirs.cacheDir = `${base.cacheDir}/${application}`;
      dirs.configDir = `${base.configDir}/${application}`;
      dirs.dataDir = `${base.dataDir}/${application}`;
      dirs.dataLocalDir = `${base.dataLocalDir}/${application}`;
      dirs.preferenceDir = `${base.preferenceDir}/${application}`;
      break;

    case "darwin":
      dirs.cacheDir =
        `${base.cacheDir}/${qualifier}.${organization}.${application}`;
      dirs.configDir =
        `${base.configDir}/${qualifier}.${organization}.${application}`;
      dirs.dataDir =
        `${base.dataDir}/${qualifier}.${organization}.${application}`;
      dirs.dataLocalDir =
        `${base.dataLocalDir}/${qualifier}.${organization}.${application}`;
      dirs.preferenceDir =
        `${base.preferenceDir}/${qualifier}.${organization}.${application}`;
      break;

    case "windows":
      dirs.cacheDir = `${base.cacheDir}\\${organization}\\${application}`;
      dirs.configDir = `${base.configDir}\\${organization}\\${application}`;
      dirs.dataDir = `${base.dataDir}\\${organization}\\${application}`;
      dirs.dataLocalDir =
        `${base.dataLocalDir}\\${organization}\\${application}`;
      dirs.preferenceDir =
        `${base.preferenceDir}\\${organization}\\${application}`;
      break;
  }

  return dirs;
}
