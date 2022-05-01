# template.ts-app

TypeScript application template repository.

---

Run initial setup:

```sh
npm init
```

Install dependencies:

```sh
npm install --save-dev \
  @typescript-eslint/eslint-plugin @typescript-eslint/parser \
  eslint eslint-webpack-plugin \
  nodemon ts-loader typescript \
  webpack webpack-bundle-analyzer webpack-cli
```

If Node module type declarations are required, include:

```sh
npm install --save-dev @types/node
```

---

Scripts for `package.json`:

```json
{
  "build": "webpack --mode production",
  "clear": "clear",
  "lint": "eslint . --ext .js,.ts",
  "lint:fix": "npm run lint -- --fix",
  "start": "npm run watch -- --mode development",
  "start:prod": "npm run watch -- --mode production",
  "watch": "npm run clear && nodemon --exec \"webpack --watch\""
}
```
