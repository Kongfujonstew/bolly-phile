module.exports = {
  context: __dirname + "/src",

  entry: {
    bollyclient: "./components/main.js"
    // bollyadmin: "./admin/admin.js"
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/src/public",
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      }
    ]
  }
};



