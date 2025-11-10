# ☂️ LSK.js – Semantic Release Config Preset

[![NPM version](https://badgen.net/npm/v/@lskjs/semantic-release-config)](https://www.npmjs.com/package/@lskjs/semantic-release-config)
[![Tests](https://github.com/lskjs/presets/actions/workflows/release.yml/badge.svg)](https://github.com/lskjs/presets/actions/workflows/release.yml)
[![Install size](https://packagephobia.com/badge?p=@lskjs/semantic-release-config)](https://packagephobia.com/result?p=@lskjs/semantic-release-config)
[![License](https://badgen.net/github/license/lskjs/presets)](https://github.com/lskjs/presets/blob/main/LICENSE)
[![Ask me in Telegram](https://img.shields.io/badge/Ask%20me%20in-Telegram-brightblue.svg)](https://t.me/isuvorov)

> Part of [@lskjs/presets](https://github.com/lskjs/presets) monorepo

<div align="center">
  <p><strong>Semantic Release configuration preset for automated versioning & publishing</strong></p>
</div>

<img src="https://github.com/lskjs/presets/raw/main/docs/logo.png" align="right" width="120" height="120" />

**🚀 Automated**: Fully automated version management  
**📦 Multi-plugin**: Changelog, npm, GitHub releases  
**🎯 Conventional Commits**: Based on commit analysis  
**🔧 Monorepo Ready**: Support for monorepo workflows  
**🎉 Beautiful**: Custom release messages with emojis  

## Installation

```bash
npm install --save-dev @lskjs/semantic-release-config
# or
yarn add --dev @lskjs/semantic-release-config
# or
pnpm add --save-dev @lskjs/semantic-release-config
```

You'll also need to install peer dependencies:

```bash
npm install --save-dev \
  semantic-release \
  @semantic-release/commit-analyzer \
  @semantic-release/release-notes-generator \
  @semantic-release/changelog \
  @semantic-release/npm \
  @semantic-release/github \
  @semantic-release/git
```

## Usage

### Default configuration

Add to your `package.json`:

```json
{
  "release": {
    "extends": "@lskjs/semantic-release-config"
  }
}
```

Or create `.releaserc.js`:

```javascript
module.exports = {
  extends: '@lskjs/semantic-release-config'
};
```

### Monorepo configuration

For monorepo projects with `main` and `beta` branches:

```json
{
  "release": {
    "extends": "@lskjs/semantic-release-config/monorepo"
  }
}
```

## Features

- ✅ Commit analysis based on conventional commits
- ✅ Automatic CHANGELOG.md generation
- ✅ NPM package publishing
- ✅ GitHub releases
- ✅ Git commits with version bump
- ✅ Automatic version management
- 🎉 Custom release message with emoji

## Configuration Details

### Default branches

- `main` - production releases

### Monorepo branches

- `main` - production releases
- `beta` - beta releases

### Plugins

1. **@semantic-release/commit-analyzer** - Analyzes commits to determine version bump
2. **@semantic-release/release-notes-generator** - Generates release notes
3. **@semantic-release/changelog** - Updates CHANGELOG.md
4. **@semantic-release/npm** - Publishes to npm
5. **@semantic-release/github** - Creates GitHub releases
6. **@semantic-release/git** - Commits version changes

### Git commit assets

- `package.json`
- `pnpm-lock.yaml`
- `CHANGELOG.md`

### Commit message format

```
chore(release): 🎉 v{version}

{release notes}

[skip ci]
```

## Example CI/CD (GitHub Actions)

```yaml
- name: Release
  env:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
    NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
  run: |
    npx semantic-release
```

For monorepos with `semantic-release-monorepo`:

```yaml
- name: Release
  env:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
    NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
  run: |
    pnpm -r exec -- npx semantic-release -e semantic-release-monorepo
```

## 📝 License

MIT © [Igor Suvorov](https://github.com/isuvorov)

---

**@lskjs/presets** - _Unified configuration for LSK.js projects_ 🎯
