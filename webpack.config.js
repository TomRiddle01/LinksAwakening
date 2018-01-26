const path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.js']
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    }
};