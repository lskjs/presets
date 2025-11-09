# @lskjs/biome-config

> LSK Biome configuration preset

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

## License

MIT © [Igor Suvorov](https://github.com/isuvorov)
