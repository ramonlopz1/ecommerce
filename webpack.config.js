const HtmlMinimizerPlugin = require('html-minimizer-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')
const modoDev = process.env.NODE_ENV !== 'production';

module.exports = {

  mode: modoDev ? 'development' : 'production',

  entry: {
    main: [
      './src/main.js'
    ]
  },


  output: {
    filename: 'assets/js/[name].js',
    path: path.resolve(__dirname, 'public'),
  },

  devtool: 'eval-source-map',


  module: {
    rules: [{
      test: /\.s[ac]ss$/, // The test property identifies which file or files should be transformed.
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] // The use property indicates which loader should be used to do the transforming.
    }, {
      test: /\.(png|svg|jpg|gif)$/i, // Process image files
      use: ['file-loader']
    }, {
      test: /\.html$/i, // Process HTML files
      type: "assets/resource"
    }
    ],
  },


  plugins: [
    new MiniCssExtractPlugin({ // Extract the SASS file to CSS file
      filename: "assets/css/style.css"
    }),

    new CopyPlugin({ // Copy a new HTML file
      patterns: [{
        from: './src/index.html',
        to: path.resolve(__dirname, 'public')
      }, {
        context: path.resolve(__dirname),
        from: "./src/assets/html",
        to: path.resolve(__dirname, 'public/assets/html')
      }, {
        from: './src/assets/img',
        to: path.resolve(__dirname, 'public/assets/img')
      }, {
        from: './src/assets/js',
        to: path.resolve(__dirname, 'public/assets/js')
      }, {
        from: './src/controller',
        to: path.resolve(__dirname, 'public/controller')
      }, {
        from: './src/services',
        to: path.resolve(__dirname, 'public/services')
      }, {
        from: './src/assets/upload',
        to: path.resolve(__dirname, 'public/assets/upload')
      }, {
        from: './src/server.js',
        to: path.resolve(__dirname, 'public')
      }]
    })
  ],

  // Optimization Minimizer
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          ecma: 6,
        }
      }),
      new HtmlMinimizerPlugin()
    ]
  },

  devServer: {
    static: {
      directory: ("./public")
    },
    compress: true,
    port: 9000
  }
};