const path = require("path");

module.exports = function() {
  return {
    entry: {
      'main': './src/main.ts'
    },
    output: {
      path: path.join(__dirname, '/../dist/assets'),
      filename: 'messenger.bundle.js',
      sourceMapFilename: 'messenger.map'
    },
    resolve: {
      extensions: ['.ts', '.js', '.json'],
      modules: [path.join(__dirname, 'src'), 'node_modules']

    },
    module: {
      rules: [{
        test: /\.ts$/,
        use: [
          'awesome-typescript-loader',
        ],
        exclude: [/\.(spec|e2e)\.ts$/, /node_modules/]
      }, {
        test: /\.css$/,
        use: ['to-string-loader', 'css-loader']
      }, {
        test: /\.(jpg|png|gif)$/,
        use: 'file-loader'
      }, {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000
          }
        }
      }],
    },
    plugins: [],
  };
}
