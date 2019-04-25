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
5. Install two loaders: `style-loader` and `css-loader`
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
6. Install bootstrap module `npm install --save-dev bootstrap`
7. Install `sass-loader` and `node-sass`
```
npm install --save-dev sass-loader node-sass
```
8. Edit rule in webpack config
```
 module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", //3. Inject styles into DOM
          "css-loader", //2. Turn css into commonjs
          "sass-loader" //1. Turn sass to css
        ]
      }
    ]
  }
```
9. Install HTML webpack plugin `npm i --save-dev html-webpack-plugin`
10. Install html-loader, filer-loader and clean-webpack-plugin
```
npm install --save-dev html-loader file-loader clean-webpack-plugin
```
11. Add jquery and popper to use JS in Bootstrap ``
