# astrolinkt

Link in Bio Template using Astro, React & TailwindCSS

## Tech Stack

- [TypeScript](https://www.typescriptlang.org)
- [React](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
  - [coloradix](https://github.com/coloradix/coloradix)
- [Radix UI](https://radix-ui.com)
  - [klass](https://github.com/flamrdevs/klass)
- [Astro](https://astro.build)

## Quick Start

[Create repository from a template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template)

or

Clone the repository

```bash
git clone https://github.com/flamrdevs/astrolinkt.git
```

Install packages

```
pnpm i
```

Start Astro development server

```
pnpm dev
```

### Customization

#### Colors

Color system is based on the [Radix Colors](https://www.radix-ui.com/colors) schema

```typescript
// tailwind.config.ts

import coloradix /*, { import the colors you want }*/ from "@coloradix/tailwindcss";

// then configure it with the coloradix plugin
```

#### Theme

Set light / Dark mode by the html data attibute

```html
<html data-theme="dark">
  <!--  -->
</html>
```

## Author

astrolinkt developed by [flamrdevs](https://github.com/flamrdevs)

## License

[MIT](./LICENSE)
