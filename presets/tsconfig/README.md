# @lskjs/tsconfig

[![NPM version](https://badgen.net/npm/v/@lskjs/tsconfig)](https://www.npmjs.com/package/@lskjs/tsconfig)
[![Tests](https://github.com/lskjs/lskjs-presets/actions/workflows/release.yml/badge.svg)](https://github.com/lskjs/lskjs-presets/actions/workflows/release.yml)
[![Install size](https://packagephobia.com/badge?p=@lskjs/tsconfig)](https://packagephobia.com/result?p=@lskjs/tsconfig)
[![License](https://badgen.net/github/license/lskjs/lskjs-presets)](https://github.com/lskjs/lskjs-presets/blob/main/LICENSE)
[![Ask me in Telegram](https://img.shields.io/badge/Ask%20me%20in-Telegram-brightblue.svg)](https://t.me/isuvorov)

> Part of [@lskjs/presets](https://github.com/lskjs/lskjs-presets) monorepo

<div align="center">
  <p><strong>TypeScript configuration presets for LSK.js projects</strong></p>
</div>

**🎯 Strict by Default**: Production-ready strict configuration  
**📦 Multiple Targets**: Base, Default, Legacy, Strict, NoStrict  
**🔧 Module Systems**: ESM, CommonJS, Library builds  
**⚡ Modern**: Latest TypeScript features enabled  
**🪶 Lightweight**: Minimal configuration, maximum compatibility  

## 📦 Installation

```bash
npm install --save-dev @lskjs/tsconfig typescript
# or
pnpm add --save-dev @lskjs/tsconfig typescript
# or
yarn add --dev @lskjs/tsconfig typescript
```

## 🚀 Usage

### Strict Configuration (Recommended)

Create `tsconfig.json` in your project root:

```json
{
  "extends": "@lskjs/tsconfig/strict"
}
```

### Available Configurations

#### Base Configuration
Minimal TypeScript setup:
```json
{
  "extends": "@lskjs/tsconfig/base"
}
```

#### Default Configuration
Balanced settings:
```json
{
  "extends": "@lskjs/tsconfig/default"
}
```

#### Legacy Configuration
For older projects:
```json
{
  "extends": "@lskjs/tsconfig/legacy"
}
```

#### Non-Strict Configuration
Relaxed rules:
```json
{
  "extends": "@lskjs/tsconfig/nostrict"
}
```

## ✨ Features

### Strict Configuration Includes
- **Strict Mode**: All strict checks enabled
- **ES Modules**: ESNext target with ESM output
- **Source Maps**: Enabled for debugging
- **Declaration Files**: Generated automatically
- **Path Resolution**: Node-style module resolution
- **JSX Support**: React JSX transformation

### Compiler Options
```json
{
  "strict": true,
  "esModuleInterop": true,
  "skipLibCheck": true,
  "forceConsistentCasingInFileNames": true,
  "resolveJsonModule": true,
  "isolatedModules": true,
  "moduleResolution": "node",
  "allowSyntheticDefaultImports": true
}
```

## 🎯 Use Cases

### Library Development
```json
{
  "extends": "@lskjs/tsconfig/strict",
  "compilerOptions": {
    "outDir": "dist",
    "declaration": true,
    "declarationMap": true
  }
}
```

### Application Development
```json
{
  "extends": "@lskjs/tsconfig/default",
  "compilerOptions": {
    "outDir": "build",
    "rootDir": "src"
  }
}
```

### CommonJS Projects
```json
{
  "extends": "@lskjs/tsconfig/base",
  "compilerOptions": {
    "module": "commonjs"
  }
}
```

## 🔧 Customization

Override any settings in your `tsconfig.json`:

```json
{
  "extends": "@lskjs/tsconfig/strict",
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM"],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

## 📁 Configuration Files

- `@lskjs/tsconfig/base` - Minimal base configuration
- `@lskjs/tsconfig/default` - Balanced default settings
- `@lskjs/tsconfig/legacy` - Legacy project support
- `@lskjs/tsconfig/strict` - **Recommended** strict mode
- `@lskjs/tsconfig/nostrict` - Non-strict mode

## 🔗 Links

- [Monorepo](https://github.com/lskjs/lskjs-presets)
- [npm package](https://www.npmjs.com/package/@lskjs/tsconfig)
- [GitHub Issues](https://github.com/lskjs/lskjs-presets/issues)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)

## 📝 License

MIT © [Igor Suvorov](https://github.com/isuvorov)

---

**@lskjs/presets** - _Unified configuration for LSK.js projects_ 🎯
