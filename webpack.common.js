const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: "development",
  output: {
    filename: "main.[contentHash].js",
    path: path.resolve(__dirname, "dist")
  },
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", //3. Inject styles into DOM
          "css-loader", //2. Turn css into commonjs
          "sass-loader" //1. Turn sass to css
        ]
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "imgs"
          }
        }
      }
    ]
  }
}
