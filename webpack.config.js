const path = require('path'), // for routes
    miniCssExtractPlugin = require('mini-css-extract-plugin'),
    autoprefixer = require('autoprefixer'),
    postcssCustomProperties = require('postcss-custom-properties');

module.exports = { // object for node js
    entry: './sources/js/app.js',
    output: {
        path: __dirname + "/public_html/theme/jhosuaTheme",
        filename: 'js/mainscript.js'
    },
    devtool: 'source-map',
    watch: true,
    module: { // for loaders
        rules: [
            { // It can also be an Arrays of Objects
                test: /\.(js)$/, // all js files
                exclude: /node_modules/, // than excludes
                loader: "babel-loader" // name loader
            },
            {
                test: /\.(css|scss)$/, // CSS or SASS files
                use: [
                    'style-loader',
                    {
                        loader: miniCssExtractPlugin.loader,
                        options: {
                            publicPath: __dirname + "public_html/theme/jhosuaTheme",
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            url: false,
                            importLoaders: 1,
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            autoprefixer: {
                                browser: [ 'last 2 versions' ]
                            },
                            soruceMarp: true,
                            plugins: () => [ autoprefixer, postcssCustomProperties ]
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new miniCssExtractPlugin({
            filename: 'css/main.css'
        }),
    ]
}
