const HtmlMinimizerPlugin = require('html-minimizer-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')
const modoDev = process.env.NODE_ENV !== 'production';

module.exports = {
  /**
   * By setting the mode parameter to either development, production or none, 
   * you can enable webpack's built-in optimizations that correspond to each environment. 
   * The default value is production.
   */

    mode: modoDev ? 'development' : 'production',

  /**
   * An entry point indicates which module webpack should use to begin building out its internal dependency graph. 
   * Webpack will figure out which other modules and libraries that entry point depends on (directly and indirectly).
   * By default its value is ./src/index.js, but you can specify a different (or multiple entry points) by 
   * setting an entry property in the webpack configuration. For example:
   */
  entry: [
      './src/main.js'
    ],

  /**
   * The output property tells webpack where to emit the bundles it creates and how to name these files. 
   * It defaults to ./dist/main.js for the main output file and to the dist folder for any other generated file.
   */
  output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'assets/js/main.js',
    },

    devtool: 'eval-source-map',

    /**
     * Out of the box, webpack only understands JavaScript and JSON files. 
     * Loaders allow webpack to process other types of files and convert them into valid modules that can be consumed 
     * by your application and added to the dependency graph.
     */
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

    /**
     * While loaders are used to transform certain types of modules, plugins can be
     *  leveraged to perform a wider range of tasks like bundle optimization, asset management and injection of environment variables.
     */
    plugins: [
      new MiniCssExtractPlugin({ // Extract the SASS file to CSS file
        filename: "assets/css/style.css"
      }), 
      
      new CopyPlugin({ // Copy a new HTML file
          patterns: [
            {
              context: path.resolve(__dirname),
              from: "./src/index.html"
            }, /**{
                from: './src/assets/img',
                to: path.resolve(__dirname, 'public/assets/img')
              } */ {
              from: './src/assets/js/smtp.js',
              to: path.resolve(__dirname, 'public/assets/js')
            }
          ]
      })
    ],

    // Optimization Minimizer
    optimization: { 
      minimize: true,
      minimizer: [
          new TerserPlugin({
              parallel: true,
              terserOptions:{
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