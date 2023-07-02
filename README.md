# Google Auth

## Getting Started

```bash
npx create-next-app --ts next-new
```

```bash
npm install sass
```

```bash
npm install firebase react-firebase-hooks
```

```bash
npm install @emotion/react @emotion/babel-plugin
```

* `tsconfig.json`に追記

```json
{
  "compilerOptions": {
    "types": ["@emotion/core"]
  }
}
```

* `.babelrc`に追記

```json
{
  "presets": [
    [
      "next/babel",
      {
        "preset-react": {
          "runtime": "automatic",
          "importSource": "@emotion/react"
        }
      }
    ]
  ],
  "plugins": ["@emotion/babel-plugin"]
}
```
