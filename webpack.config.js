const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPWAManifestPlugin = require('webpack-pwa-manifest');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const path = require('path');

module.exports = {
  output: {
    filename: 'app.bundle.js',
    publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new WebpackPWAManifestPlugin({
      name: 'Petgram - Pet Photos',
      short_name: 'Petgram 🐶',
      description: "pet photos",
      background_color: "#fff",
      theme_color: "#b1a",
      ios: true,
      inject: true,
      lang: 'es',
      start_url: '/',
      icons: [
        {
          src: path.resolve('src/assets/logo.png'),
          sizes: [96, 128, 192, 256, 384, 512]
        }
      ],
    }),
    new FaviconsWebpackPlugin(
      {
        logo: 'src/assets/logo.png',
        inject: true,
        favicons: {
          icons: {
            coast: false,
            yandex: false
          }
        }
      }
    ),
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp('https://(res.cloudinary.com|images.unsplash.com)'),
          handler: 'CacheFirst',
          options: {
            cacheName: 'images'
          }
        },
        {
          urlPattern: new RegExp('http://localhost:3500'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api'
          }
        }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      }
    ]
  }
}
