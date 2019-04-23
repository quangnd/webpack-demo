# Webpack-demo

## Steps

1. Add default `package.json` with `npm init -y`
2. Add **webpack**
```
npm install --save-dev webpack webpack-cli
```
3. Export modules and re-organize files
4. Add `webpack.config.js` with basic declaration
```
const path = require('path')
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  }
}

```
5. Installed `style-loader` and `css-loader`
- Install with `npm install --save-dev style-loader css-loader`.
- Configured `webpack.config` to use both loaders on css files
```
 module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
```
