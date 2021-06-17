# directories

## Usage

below is an example with user `alice` using `BaseDirs`:

```typescript
import { baseDirs } from "https://deno.land/x/directories/mod.ts";

const dirs = baseDirs.load();

// Home Directory

console.log(dirs.home_dir);
// Linux: /home/alice
// Windows: C:\Users\Alice
// macOS: /Users/Alice

// Cache Directory

console.log(dirs.cache_dir);
// Linux: /home/alice/.cache
// Windows: C:\Users\Alice\AppData\Local
// macOS: /Users/Alice/Library/Caches

// Config Directory

console.log(dirs.config_dir);
// Linux: /home/alice/.config
// Windows: C:\Users\Alice\AppData\Roaming
// macOS: /Users/Alice/Library/Application Support
```
