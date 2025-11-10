# @lsk4/jest-config

[![NPM version](https://badgen.net/npm/v/@lsk4/jest-config)](https://www.npmjs.com/package/@lsk4/jest-config)
[![Tests](https://github.com/lskjs/lskjs-presets/actions/workflows/release.yml/badge.svg)](https://github.com/lskjs/lskjs-presets/actions/workflows/release.yml)
[![Install size](https://packagephobia.com/badge?p=@lsk4/jest-config)](https://packagephobia.com/result?p=@lsk4/jest-config)
[![License](https://badgen.net/github/license/lskjs/lskjs-presets)](https://github.com/lskjs/lskjs-presets/blob/main/LICENSE)
[![Ask me in Telegram](https://img.shields.io/badge/Ask%20me%20in-Telegram-brightblue.svg)](https://t.me/isuvorov)

> Part of [@lskjs/presets](https://github.com/lskjs/lskjs-presets) monorepo

<div align="center">
  <p><strong>Jest configuration preset for LSK.js projects with TypeScript support</strong></p>
</div>

**🧪 TypeScript**: Built-in ts-jest support  
**📊 Coverage**: Pre-configured coverage reporting  
**🎯 JUnit**: JUnit XML reporter for CI/CD  
**⚡ Fast**: Optimized test execution  
**📦 Zero Config**: Works out of the box  

## 📦 Installation

```bash
npm install --save-dev @lsk4/jest-config jest
# or
pnpm add --save-dev @lsk4/jest-config jest
# or
yarn add --dev @lsk4/jest-config jest
```

For TypeScript projects, also install:

```bash
npm install --save-dev ts-jest @types/jest
```

## 🚀 Usage

### Default Configuration

Add to your `jest.config.js`:

```javascript
module.exports = {
  preset: '@lsk4/jest-config'
};
```

Or in `package.json`:

```json
{
  "jest": {
    "preset": "@lsk4/jest-config"
  }
}
```

### Strict Configuration

For stricter testing setup:

```javascript
module.exports = {
  preset: '@lsk4/jest-config/strict'
};
```

## ✨ Features

### Included Configuration
- **ts-jest** - TypeScript transformation
- **jest-junit** - JUnit XML reporter for CI/CD
- **Coverage reporting** - Pre-configured thresholds
- **Module resolution** - Smart path resolution
- **Test matching** - Sensible test file patterns

### Default Settings
- Transform TypeScript files with ts-jest
- Collect coverage from `src/**` files
- Generate JUnit reports for CI/CD integration
- Support for ES modules and CommonJS

## 🔧 Customization

Extend the configuration in your `jest.config.js`:

```javascript
const baseConfig = require('@lsk4/jest-config/jest-preset');

module.exports = {
  ...baseConfig,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.test.{js,jsx,ts,tsx}'
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
};
```

## 📊 Coverage

The preset includes sensible coverage defaults:

```javascript
{
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts'
  ],
  coverageDirectory: 'coverage'
}
```

## 🎯 JUnit Reporter

JUnit XML reports are automatically generated for CI/CD integration:

```javascript
{
  reporters: [
    'default',
    'jest-junit'
  ]
}
```

## 🔗 Links

- [Monorepo](https://github.com/lskjs/lskjs-presets)
- [npm package](https://www.npmjs.com/package/@lsk4/jest-config)
- [GitHub Issues](https://github.com/lskjs/lskjs-presets/issues)

## 📝 License

MIT © [Igor Suvorov](https://github.com/isuvorov)

---

**@lskjs/presets** - _Unified configuration for LSK.js projects_ 🎯
