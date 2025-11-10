# @lsk4/tsup-config

[![NPM version](https://badgen.net/npm/v/@lsk4/tsup-config)](https://www.npmjs.com/package/@lsk4/tsup-config)
[![Tests](https://github.com/lskjs/presets/actions/workflows/release.yml/badge.svg)](https://github.com/lskjs/presets/actions/workflows/release.yml)
[![Install size](https://packagephobia.com/badge?p=@lsk4/tsup-config)](https://packagephobia.com/result?p=@lsk4/tsup-config)
[![License](https://badgen.net/github/license/lskjs/presets)](https://github.com/lskjs/presets/blob/main/LICENSE)
[![Ask me in Telegram](https://img.shields.io/badge/Ask%20me%20in-Telegram-brightblue.svg)](https://t.me/isuvorov)

> Part of [@lskjs/presets](https://github.com/lskjs/presets) monorepo

<div align="center">
  <p><strong>TSUP bundler configuration for LSK.js TypeScript projects</strong></p>
</div>

**⚡ Fast**: Lightning-fast TypeScript bundler powered by esbuild  
**📦 Multiple Formats**: ESM, CommonJS, and UMD support  
**🎯 TypeScript**: Full type declaration generation  
**🔧 Zero Config**: Sensible defaults for library builds  
**🪶 Lightweight**: Minimal configuration, maximum performance  
**📊 Source Maps**: Built-in source map support  

## 📦 Installation

```bash
npm install --save-dev @lsk4/tsup-config tsup typescript
# or
pnpm add --save-dev @lsk4/tsup-config tsup typescript
# or
yarn add --dev @lsk4/tsup-config tsup typescript
```

## 🚀 Usage

### Default Configuration (CommonJS + ESM)

Create `tsup.config.js` or `tsup.config.ts`:

```javascript
import { defineConfig } from '@lsk4/tsup-config';

export default defineConfig();
```

Or import the base config:

```javascript
const baseConfig = require('@lsk4/tsup-config');

module.exports = baseConfig;
```

### ESM Only

For ESM-only builds:

```javascript
import { defineConfig } from '@lsk4/tsup-config/esm';

export default defineConfig();
```

## ✨ Features

### Default Configuration Includes
- **Dual Format**: CommonJS and ESM outputs
- **Type Declarations**: Automatic .d.ts generation
- **Source Maps**: Enabled for debugging
- **Code Splitting**: Smart chunk splitting
- **Tree Shaking**: Dead code elimination
- **Minification**: Optional production minification

### Output Structure
```
dist/
├── index.js          # CommonJS
├── index.d.ts        # TypeScript declarations
└── esm/
    └── index.js      # ESM
```

## 🎯 Use Cases

### Library Build

```javascript
import { defineConfig } from '@lsk4/tsup-config';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  clean: true
});
```

### Multiple Entry Points

```javascript
import { defineConfig } from '@lsk4/tsup-config';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    client: 'src/client.ts',
    server: 'src/server.ts'
  }
});
```

### Development Mode

```javascript
import { defineConfig } from '@lsk4/tsup-config';

export default defineConfig({
  watch: true,
  sourcemap: true,
  minify: false
});
```

### Production Build

```javascript
import { defineConfig } from '@lsk4/tsup-config';

export default defineConfig({
  minify: true,
  sourcemap: false,
  clean: true,
  splitting: true
});
```

## 🔧 Customization

Extend the base configuration:

```javascript
import baseConfig from '@lsk4/tsup-config';
import { defineConfig } from 'tsup';

export default defineConfig({
  ...baseConfig,
  entry: ['src/index.ts'],
  external: ['react', 'react-dom'],
  banner: {
    js: '/* Custom banner */'
  },
  esbuildOptions(options) {
    options.drop = ['console', 'debugger'];
  }
});
```

## 📊 Package.json Setup

Configure your `package.json` for proper exports:

```json
{
  "main": "./dist/index.js",
  "module": "./dist/esm/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/esm/index.js",
      "require": "./dist/index.js",
      "types": "./dist/index.d.ts"
    }
  },
  "files": ["dist"],
  "scripts": {
    "build": "tsup",
    "dev": "tsup --watch"
  }
}
```

## ⚙️ Configuration Options

The preset includes these default options:

```javascript
{
  format: ['cjs', 'esm'],
  dts: true,
  sourcemap: true,
  clean: true,
  splitting: false,
  treeshake: true,
  minify: false,
  target: 'es2020',
  outDir: 'dist'
}
```

## 🔗 Links

- [Monorepo](https://github.com/lskjs/presets)
- [npm package](https://www.npmjs.com/package/@lsk4/tsup-config)
- [GitHub Issues](https://github.com/lskjs/presets/issues)
- [TSUP Documentation](https://tsup.egoist.dev/)

## 📝 License

MIT © [Igor Suvorov](https://github.com/isuvorov)

---

**@lskjs/presets** - _Unified configuration for LSK.js projects_ 🎯
