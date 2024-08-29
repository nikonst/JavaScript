const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        clean: true,
        assetModuleFilename: '[name][ext]',
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 8080,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                mimetype: 'image/svg+xml',
                scheme: 'data',
                type: 'asset/resource',
                generator: {
                filename: 'icons/[hash].svg'
                }
                },
            {
                test:/\.scss$/,
                use: [
                    {
                      // Adds CSS to the DOM by injecting a `<style>` tag
                      loader: 'style-loader'
                    },
                    {
                      // Interprets `@import` and `url()` like `import/require()` and will resolve them
                      loader: 'css-loader'
                    },
                    {
                      // Loader for webpack to process CSS with PostCSS
                      loader: 'postcss-loader',
                      options: {
                        postcssOptions: {
                          plugins: [
                            autoprefixer
                          ]
                        }
                      }
                    },
                    {
                      // Loads a SASS/SCSS file and compiles it to CSS
                      loader: 'sass-loader'
                    }
                  ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {}
                }],
                type: 'asset/resource',
              },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Web App",
            filename: 'index.html',
            template: 'src/template.html'
        })
    ],
}
