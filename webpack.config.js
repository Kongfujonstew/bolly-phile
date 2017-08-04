module.exports = {
  context: __dirname + "/src",

  entry: "./components/main.js",

  output: {
    filename: "bolly-client.js",
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



