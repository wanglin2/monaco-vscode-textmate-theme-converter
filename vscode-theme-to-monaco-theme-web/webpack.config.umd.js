const {
    merge
} = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

module.exports = merge(baseConfig, {
    output: {
        filename: 'index.js',
        library: {
            name: 'vscodeThemeToMonacoTheme',
            type: 'umd'
        },
        globalObject: 'this'
    }
})