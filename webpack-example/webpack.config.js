const { ModuleFilenameHelpers } = require("webpack");

module.exports = {
    mode: 'development',
    entry: './src/js/index.js',
    output: {
        path: __dirname + '/build',
        filename: 'main.js'
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
        ]
    }
}