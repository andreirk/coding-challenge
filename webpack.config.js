const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  bail: true,
  mode: 'development',
  entry: [path.join(__dirname, 'src/index')],
  target: 'web',
  devtool: 'cheap-module-source-map',
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'out')
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', 'tsx']
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'out'),
    port: 8080,
    host: 'localhost'
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            babelrc: false,
            presets: [
              [
                '@babel/preset-env',
                { targets: { chrome: '66' } }
              ],
              '@babel/preset-typescript',
              '@babel/preset-react'
            ],
            plugins: [
              ['@babel/plugin-proposal-decorators', { legacy: true }],
              ['@babel/plugin-proposal-class-properties', { loose: true }],
              ['@babel/plugin-proposal-object-rest-spread', { loose: true }],
              ['transform-react-remove-prop-types', { mode: 'wrap' }],
              'dynamic-import-node-babel-7',
              'react-hot-loader/babel'
            ]
          }
        }
      },
      {
        test: /\.(woff2?|eot|ttf|svg|png|jpg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 20000,
            fallback: 'file-loader'
          }
        }
      },
      {
        test: /\.css$/,
        use: createCssUse()
      },
      {
        test: /\.scss$/,
        use: createCssUse(true)
      },
      {
        test: /\.jsx?$/,
        use: 'source-map-loader',
        exclude: /node_modules/,
        enforce: 'pre'
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ chunkFilename: '[name].css' }),
    new HtmlWebpackPlugin({
      title: 'Test',
      template: path.join(__dirname, 'index.ejs'),
      filename: 'index.html'
    })
  ]
};

function createCssUse(sass = false, modules = false) {
  const output = [
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        importLoaders: 1,
        modules,
        localIdentName: modules
          ? '[path][name]-[local]-[hash:base64:5]'
          : undefined
      }
    }
  ];
  if (sass) {
    output.push('sass-loader');
  }
  return output;
}
