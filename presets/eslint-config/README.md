# ☂️ LSK.js – ESLint Config Preset

[![NPM version](https://badgen.net/npm/v/@lskjs/eslint-config)](https://www.npmjs.com/package/@lskjs/eslint-config)
[![Tests](https://github.com/lskjs/presets/actions/workflows/release.yml/badge.svg)](https://github.com/lskjs/presets/actions/workflows/release.yml)
[![Install size](https://packagephobia.com/badge?p=@lskjs/eslint-config)](https://packagephobia.com/result?p=@lskjs/eslint-config)
[![License](https://badgen.net/github/license/lskjs/presets)](https://github.com/lskjs/presets/blob/main/LICENSE)
[![Ask me in Telegram](https://img.shields.io/badge/Ask%20me%20in-Telegram-brightblue.svg)](https://t.me/isuvorov)

> Part of [@lskjs/presets](https://github.com/lskjs/presets) monorepo

<div align="center">
  <p><strong>ESLint configuration for LSK.js projects with TypeScript, React & Prettier support</strong></p>
</div>

<img src="https://github.com/lskjs/presets/raw/main/docs/logo.png" align="right" width="120" height="120" />

**🎯 Comprehensive**: Based on Airbnb style guide  
**💎 TypeScript**: Full TypeScript support with type-aware linting  
**⚛️ React**: React & JSX best practices  
**🎨 Prettier**: Integrated Prettier formatting  
**📦 Zero Config**: Works out of the box  
**🔧 Customizable**: Easy to extend and override  

## 📦 Installation

```bash
npm install --save-dev @lskjs/eslint-config eslint
# or
pnpm add --save-dev @lskjs/eslint-config eslint
# or
yarn add --dev @lskjs/eslint-config eslint
```

## 🚀 Usage

### Default Configuration

Add to your `.eslintrc.js`:

```javascript
module.exports = {
  extends: '@lskjs/eslint-config'
};
```

Or in `package.json`:

```json
{
  "eslintConfig": {
    "extends": "@lskjs/eslint-config"
  }
}
```

### Strict Configuration

For stricter linting rules:

```javascript
module.exports = {
  extends: '@lskjs/eslint-config/strict'
};
```

### JavaScript Only

```javascript
module.exports = {
  extends: '@lskjs/eslint-config/js'
};
```

### TypeScript

```javascript
module.exports = {
  extends: '@lskjs/eslint-config/ts'
};
```

### React

```javascript
module.exports = {
  extends: '@lskjs/eslint-config/react'
};
```

### Next.js

```javascript
module.exports = {
  extends: '@lskjs/eslint-config/nextjs'
};
```

### Prettier

For Prettier configuration:

```json
{
  "prettier": "@lskjs/eslint-config/prettier"
}
```

## ✨ Features

### Base Configuration Includes
- **Airbnb** style guide
- **Prettier** integration
- **Import** resolver with TypeScript support
- **JSON** linting support

### TypeScript Features
- Type-aware linting rules
- Import resolution for `.ts` and `.tsx` files
- Strict type checking recommendations

### React Features
- JSX best practices
- Hooks rules
- Accessibility (a11y) checks

## 🎨 Prettier Configuration

The package includes a Prettier configuration that works seamlessly with ESLint:

- **Print Width**: 100 characters
- **Tab Width**: 2 spaces
- **Semicolons**: Always
- **Single Quotes**: Yes
- **Trailing Commas**: ES5

## 📁 Available Configurations

- `@lskjs/eslint-config` - Default (relaxed)
- `@lskjs/eslint-config/strict` - Strict rules
- `@lskjs/eslint-config/nostrict` - Non-strict rules
- `@lskjs/eslint-config/js` - JavaScript only
- `@lskjs/eslint-config/ts` - TypeScript
- `@lskjs/eslint-config/react` - React
- `@lskjs/eslint-config/nextjs` - Next.js
- `@lskjs/eslint-config/prettier` - Prettier config

## 🔧 Customization

You can override any rules:

```javascript
module.exports = {
  extends: '@lskjs/eslint-config',
  rules: {
    'no-console': 'warn',
    'react/prop-types': 'off'
  }
};
```

## 🔗 Links

- [Monorepo](https://github.com/lskjs/presets)
- [npm package](https://www.npmjs.com/package/@lskjs/eslint-config)
- [GitHub Issues](https://github.com/lskjs/presets/issues)

## 📝 License

MIT © [Igor Suvorov](https://github.com/isuvorov)

---

**@lskjs/presets** - _Unified configuration for LSK.js projects_ 🎯
