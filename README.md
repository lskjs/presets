# ☂️ LSK.js – Presets Monorepo

[![Tests](https://github.com/lskjs/presets/actions/workflows/release.yml/badge.svg)](https://github.com/lskjs/presets/actions/workflows/release.yml)
[![License](https://badgen.net/github/license/lskjs/presets)](https://github.com/lskjs/presets/blob/main/LICENSE)
[![Ask me in Telegram](https://img.shields.io/badge/Ask%20me%20in-Telegram-brightblue.svg)](https://t.me/isuvorov)

<div align="center">
  <p><strong>❤️‍🔥 Unified configuration presets for modern projects ❤️‍🔥</strong></p>
</div>

<img src="https://github.com/lskjs/presets/raw/main/docs/logo.png" align="right" width="120" height="120" />

**🚀 Modern**: Latest tooling and best practices for 2025+  
**🔧 Zero Config**: Sensible defaults that just work  
**💎 TypeScript**: Full TypeScript support across all presets  
**⚡ Fast**: Optimized configurations for maximum performance  
**🎯 Focused**: Essential configurations without bloat  
**📦 Production Ready**: Battle-tested in production environments  

## 📦 Packages

| Package | Version | Size | Description |
|---------|---------|------|-------------|
| **[@lskjs/biome-config]** | [![npm](https://badgen.net/npm/v/@lskjs/biome-config)](https://www.npmjs.com/package/@lskjs/biome-config) | [![size](https://packagephobia.com/badge?p=@lskjs/biome-config)](https://packagephobia.com/result?p=@lskjs/biome-config) | Biome linter & formatter config |
| **[@lskjs/eslint-config]** | [![npm](https://badgen.net/npm/v/@lskjs/eslint-config)](https://www.npmjs.com/package/@lskjs/eslint-config) | [![size](https://packagephobia.com/badge?p=@lskjs/eslint-config)](https://packagephobia.com/result?p=@lskjs/eslint-config) | ESLint config with TypeScript & Prettier |
| **[@lskjs/semantic-release-config]** | [![npm](https://badgen.net/npm/v/@lskjs/semantic-release-config)](https://www.npmjs.com/package/@lskjs/semantic-release-config) | [![size](https://packagephobia.com/badge?p=@lskjs/semantic-release-config)](https://packagephobia.com/result?p=@lskjs/semantic-release-config) | Semantic Release automation config |
| **[@lskjs/tsconfig]** | [![npm](https://badgen.net/npm/v/@lskjs/tsconfig)](https://www.npmjs.com/package/@lskjs/tsconfig) | [![size](https://packagephobia.com/badge?p=@lskjs/tsconfig)](https://packagephobia.com/result?p=@lskjs/tsconfig) | TypeScript configurations (strict/base/legacy) |
| **[@lsk4/babel-preset]** | [![npm](https://badgen.net/npm/v/@lsk4/babel-preset)](https://www.npmjs.com/package/@lsk4/babel-preset) | [![size](https://packagephobia.com/badge?p=@lsk4/babel-preset)](https://packagephobia.com/result?p=@lsk4/babel-preset) | Babel preset with TypeScript & React |
| **[@lsk4/jest-config]** | [![npm](https://badgen.net/npm/v/@lsk4/jest-config)](https://www.npmjs.com/package/@lsk4/jest-config) | [![size](https://packagephobia.com/badge?p=@lsk4/jest-config)](https://packagephobia.com/result?p=@lsk4/jest-config) | Jest config with TypeScript support |
| **[@lsk4/tsup-config]** | [![npm](https://badgen.net/npm/v/@lsk4/tsup-config)](https://www.npmjs.com/package/@lsk4/tsup-config) | [![size](https://packagephobia.com/badge?p=@lsk4/tsup-config)](https://packagephobia.com/result?p=@lsk4/tsup-config) | TSUP bundler config for libraries |

[@lsk4/babel-preset]: ./presets/babel-preset
[@lskjs/eslint-config]: ./legacy-presets/eslint-config
[@lsk4/jest-config]: ./presets/jest-config
[@lskjs/tsconfig]: ./legacy-presets/tsconfig
[@lsk4/tsup-config]: ./presets/tsup-config
[@lskjs/biome-config]: ./legacy-presets/biome-config
[@lskjs/semantic-release-config]: ./legacy-presets/semantic-release-config

## 🚀 Quick Start

### Babel

```bash
npm install --save-dev @lsk4/babel-preset @babel/core
```

```json
{
  "presets": ["@lsk4/babel-preset"]
}
```

### ESLint

```bash
npm install --save-dev @lskjs/eslint-config eslint
```

```javascript
module.exports = {
  extends: '@lskjs/eslint-config'
};
```

### Jest

```bash
npm install --save-dev @lsk4/jest-config jest
```

```javascript
module.exports = {
  preset: '@lsk4/jest-config'
};
```

### TypeScript

```bash
npm install --save-dev @lskjs/tsconfig typescript
```

```json
{
  "extends": "@lskjs/tsconfig/strict"
}
```

### TSUP

```bash
npm install --save-dev @lsk4/tsup-config tsup
```

```javascript
import { defineConfig } from '@lsk4/tsup-config';

export default defineConfig();
```

### Biome

```bash
npm install --save-dev @lskjs/biome-config @biomejs/biome
```

```json
{
  "extends": ["@lskjs/biome-config"]
}
```

### Semantic Release

```bash
npm install --save-dev @lskjs/semantic-release-config semantic-release
```

```json
{
  "release": {
    "extends": "@lskjs/semantic-release-config"
  }
}
```

## 📖 Documentation

### Configuration Presets
- [**@lsk4/babel-preset**](./presets/babel-preset/README.md) - Babel with TypeScript & React support
- [**@lskjs/eslint-config**](./presets/eslint-config/README.md) - ESLint with Airbnb, TypeScript, React & Prettier
- [**@lsk4/jest-config**](./presets/jest-config/README.md) - Jest with TypeScript and coverage
- [**@lskjs/tsconfig**](./presets/tsconfig/README.md) - TypeScript configurations for various use cases
- [**@lsk4/tsup-config**](./presets/tsup-config/README.md) - TSUP bundler for library builds
- [**@lskjs/biome-config**](./presets/biome-config/README.md) - Biome linter and formatter
- [**@lskjs/semantic-release-config**](./presets/semantic-release-config/README.md) - Automated versioning and publishing

## ✨ Features

### 🎯 Babel Preset
- Full ES6+ and TypeScript support
- React and Emotion support
- Decorators and modern syntax
- Runtime transforms and polyfills

### 🔍 ESLint Config
- Based on Airbnb style guide
- TypeScript type-aware linting
- React and JSX best practices
- Integrated Prettier formatting
- Multiple configurations (strict/js/ts/react/nextjs)

### 🧪 Jest Config
- TypeScript support with ts-jest
- Coverage reporting
- JUnit XML reports for CI/CD
- Optimized test execution

### 📘 TypeScript Config
- Multiple presets (base/default/legacy/strict/nostrict)
- ESM and CommonJS support
- Declaration files generation
- Strict mode by default

### 📦 TSUP Config
- Dual format (ESM + CommonJS)
- TypeScript declaration files
- Source maps and tree shaking
- Lightning-fast builds with esbuild

### ⚡ Biome Config
- Fast linting and formatting
- TypeScript support
- Single quotes and semicolons
- Configurable strictness levels

### 🎉 Semantic Release Config
- Automated versioning
- Changelog generation
- NPM and GitHub releases
- Git commits with version bumps
- Monorepo support

## 🛠 Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Release packages
pnpm run release
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

MIT © [Igor Suvorov](https://github.com/isuvorov)

## 🔗 Links

- [GitHub Repository](https://github.com/lskjs/presets)
- [Issues](https://github.com/lskjs/presets/issues)
- [Telegram](https://t.me/isuvorov)

---

**@lskjs/presets** - _Unified configuration for LSK.js projects_ 🎯
