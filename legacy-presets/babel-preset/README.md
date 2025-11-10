# @lsk4/babel-preset

[![NPM version](https://badgen.net/npm/v/@lsk4/babel-preset)](https://www.npmjs.com/package/@lsk4/babel-preset)
[![Tests](https://github.com/lskjs/lskjs-presets/actions/workflows/release.yml/badge.svg)](https://github.com/lskjs/lskjs-presets/actions/workflows/release.yml)
[![Install size](https://packagephobia.com/badge?p=@lsk4/babel-preset)](https://packagephobia.com/result?p=@lsk4/babel-preset)
[![License](https://badgen.net/github/license/lskjs/lskjs-presets)](https://github.com/lskjs/lskjs-presets/blob/main/LICENSE)
[![Ask me in Telegram](https://img.shields.io/badge/Ask%20me%20in-Telegram-brightblue.svg)](https://t.me/isuvorov)

> Part of [@lskjs/presets](https://github.com/lskjs/lskjs-presets) monorepo

<div align="center">
  <p><strong>Babel preset for LSK.js projects with modern JavaScript & TypeScript support</strong></p>
</div>

**🚀 Modern**: Full ES6+ and TypeScript support  
**⚡ Optimized**: Includes runtime transforms and polyfills  
**⚛️ React Ready**: Built-in React and Emotion support  
**🎯 Decorators**: Support for experimental decorators  
**📦 Production Ready**: Battle-tested in production environments  

## 📦 Installation

```bash
npm install --save-dev @lsk4/babel-preset @babel/core
# or
pnpm add --save-dev @lsk4/babel-preset @babel/core
# or
yarn add --dev @lsk4/babel-preset @babel/core
```

## 🚀 Usage

Add to your `.babelrc` or `babel.config.js`:

```json
{
  "presets": ["@lsk4/babel-preset"]
}
```

Or in `babel.config.js`:

```javascript
module.exports = {
  presets: ['@lsk4/babel-preset']
};
```

## ✨ Features

### Included Presets
- **@babel/preset-env** - Smart polyfills and transforms
- **@babel/preset-react** - React JSX support
- **@babel/preset-typescript** - TypeScript compilation

### Included Plugins
- **@babel/plugin-proposal-decorators** - Decorator syntax support
- **@babel/plugin-proposal-class-properties** - Class properties
- **@babel/plugin-proposal-optional-chaining** - Optional chaining (?.)
- **@babel/plugin-proposal-export-namespace-from** - Export namespace
- **@babel/plugin-proposal-function-bind** - Function bind operator (::)
- **@babel/plugin-proposal-private-methods** - Private class methods
- **@babel/plugin-transform-runtime** - Runtime helpers optimization
- **@babel/plugin-transform-modules-commonjs** - ESM to CommonJS
- **@emotion/babel-plugin** - Emotion CSS-in-JS support

## 🔧 Configuration

The preset works out of the box with sensible defaults. For custom configuration:

```javascript
module.exports = {
  presets: [
    ['@lsk4/babel-preset', {
      // Custom options here
    }]
  ]
};
```

## 🔗 Links

- [Monorepo](https://github.com/lskjs/lskjs-presets)
- [npm package](https://www.npmjs.com/package/@lsk4/babel-preset)
- [GitHub Issues](https://github.com/lskjs/lskjs-presets/issues)

## 📝 License

MIT © [Igor Suvorov](https://github.com/isuvorov)

---

**@lskjs/presets** - _Unified configuration for LSK.js projects_ 🎯
