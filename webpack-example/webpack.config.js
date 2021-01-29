const { ModuleFilenameHelpers } = require("webpack");

module.exports = {
    mode: 'development',
    entry: {
        about: './src/js/about.js',
        contact: './src/js/contact.js',
        main: './src/js/index.js',
    },
    output: {
        path: __dirname + '/build',
        filename: '[name].bundle.js'
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use:
                {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.(png|jpg)$/i,
                type: 'asset/resource',
                use: [
                    {
                        loader: 'file-loader',
                    }
                ]
            },
        ]
    }
}