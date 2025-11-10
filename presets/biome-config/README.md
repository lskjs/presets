# @lskjs/biome-config

[![NPM version](https://badgen.net/npm/v/@lskjs/biome-config)](https://www.npmjs.com/package/@lskjs/biome-config)
[![Tests](https://github.com/lskjs/lskjs-presets/actions/workflows/release.yml/badge.svg)](https://github.com/lskjs/lskjs-presets/actions/workflows/release.yml)
[![Install size](https://packagephobia.com/badge?p=@lskjs/biome-config)](https://packagephobia.com/result?p=@lskjs/biome-config)
[![License](https://badgen.net/github/license/lskjs/lskjs-presets)](https://github.com/lskjs/lskjs-presets/blob/main/LICENSE)
[![Ask me in Telegram](https://img.shields.io/badge/Ask%20me%20in-Telegram-brightblue.svg)](https://t.me/isuvorov)

> Part of [@lskjs/presets](https://github.com/lskjs/lskjs-presets) monorepo

<div align="center">
  <p><strong>Biome configuration preset for LSK.js projects with linting & formatting</strong></p>
</div>

**⚡ Fast**: Lightning-fast linting and formatting  
**🎯 All-in-One**: Linter + Formatter in one tool  
**📦 Zero Config**: Works out of the box  
**🔧 Configurable**: Easy to extend and customize  
**💎 TypeScript**: Full TypeScript support  

## Installation

```bash
npm install --save-dev @lskjs/biome-config
# or
yarn add --dev @lskjs/biome-config
# or
pnpm add --save-dev @lskjs/biome-config
```

## Usage

### Default configuration

Create `biome.json` in your project root:

```json
{
  "extends": ["@lskjs/biome-config"]
}
```

### Strict configuration

For stricter linting rules:

```json
{
  "extends": ["@lskjs/biome-config/strict"]
}
```

## Features

- ✅ Linter enabled with recommended rules
- ✅ Formatter enabled with 2-space indentation
- ✅ 100 character line width
- ✅ Single quotes for JavaScript/TypeScript
- ✅ Semicolons always required
- ✅ Pre-configured for TypeScript projects
- ⚠️ `noExplicitAny` rule disabled for flexibility

## Configuration Details

- **Indent Style**: Spaces
- **Indent Width**: 2
- **Line Width**: 100
- **Quote Style**: Single quotes
- **Semicolons**: Always
- **Default Includes**: `src/**/*.ts`, `tests/**/*.ts`

## 🔗 Links

- [Monorepo](https://github.com/lskjs/lskjs-presets)
- [npm package](https://www.npmjs.com/package/@lskjs/biome-config)
- [GitHub Issues](https://github.com/lskjs/lskjs-presets/issues)
- [Biome Documentation](https://biomejs.dev/)

## 📝 License

MIT © [Igor Suvorov](https://github.com/isuvorov)

---

**@lskjs/presets** - _Unified configuration for LSK.js projects_ 🎯
