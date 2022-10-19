const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const projectDir = path.resolve(__dirname, "../");

module.exports = {
  entry: path.resolve(projectDir, "src/index.js"),
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(projectDir, "dist/"),
    filename: "bundle.js"
  },
  plugins: [new HtmlWebpackPlugin({
    title: "The translator of Hugh",
    inject: "body"
  })]
};
