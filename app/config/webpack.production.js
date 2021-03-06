const dotenv            = require('dotenv'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      path              = require('path'),
      webpack           = require('webpack');

dotenv.load();

module.exports = {
  devtool: 'source-map',
  entry: './app/index',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css', 'resolve-url']
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'resolve-url', 'sass?sourceMap']
      },
      {
        test: /\.(woff|woff2|eot|otf|ttf|svg|png)$/,
        loader: 'url-loader?limit=8000'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  output: {
    filename:   'bundle.js',
    path:       './dist',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'app/config/templates/index.html' }),
    new webpack.NormalModuleReplacementPlugin(/^(net|dns)$/, path.resolve(__dirname, '../lib/server/shim.js')),
    new webpack.DefinePlugin({
      'process.env': Object.keys(process.env).reduce(function(o, k) {
        o[k] = JSON.stringify(process.env[k]);

        return o;
      }, {})
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss', '.png']
  }
};
