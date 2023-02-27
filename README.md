# nuxt-listify-theme

这是一个基于 [Nuxt3](https://github.com/nuxt/nuxt)、[Nuxt Content](https://github.com/nuxt/content) 、[Nuxt Layers](https://nuxt.com/docs/getting-started/layers) 的主题，通过 `json` 或者 `yaml` 来生成一个极简的列表。

## Try it now!

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/ChangJun2019/listify-template/generate).

### Clone to local

```bash
npx degit ChangJun2019/listify-template my-listify
cd my-listify
pnpm i
```

## From Nuxt

```bash
npx nuxi init my-listify
cd my-listify
pnpm i listify-theme@latest
```

### Nuxt.config.ts

```ts
export default defineNuxtConfig({
  extends: [
    'listify-theme'
  ]
})
```

## Usage

在 content 目录下 书写 json 或者 yaml 文件

### format

```yaml
frontmatter:
title: your title
icon: icones name
description: your description

listify:
- name: your name
  link: your link
```

### Development

```bash
pnpm run dev
```

### Build

```bash
pnpm run build # or generate
```
