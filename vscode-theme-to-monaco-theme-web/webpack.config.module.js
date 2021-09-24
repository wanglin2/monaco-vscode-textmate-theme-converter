const {
    merge
} = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

module.exports = merge(baseConfig, {
    experiments: {
        outputModule: true,
    },
    output: {
        filename: 'index.module.js',
        library: {
            type: 'module'
        }
    }
})