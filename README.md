# directories

> This library is based on Rust's crate
> [directories](https://crates.io/crates/directories)

## Usage

below is an example with user `alice` using `BaseDirs`:

```typescript
import {
  baseDirs,
  projectDirs,
  userDirs,
} from "https://deno.land/x/directories/mod.ts";

const base = baseDirs.load();
console.log(base.cacheDir);
// Linux: /home/alice/.cache
// Windows: C:\Users\Alice\AppData\Local
// macOS: /Users/Alice/Library/Caches

const user = userDirs.load();
console.log(user.musicDir);
// Linux: /home/alice/Music
// Windows: C:\Users\Alice\Muic
// macOS: /Users/Alice/Music

const project = projectDirs.load("com", "jheysondev", "directories");
console.log(project.preferenceDir);
// Linux: /home/alice/.config/directories
// Windows: C:\Users\Alice\AppData\Roaming\jheysondev\directories
// macOS: /Users/Alice/Library/Preferences/com.jheysondev.directories
```
