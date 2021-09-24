const converter = require('../src/index')
const path = require('path')

try {
    // 转换单个文件
    // converter.convertThemeFromFilePath(path.resolve(__dirname, 'themesFrom', 'OneDarkPro.jsonc'), path.resolve(__dirname, 'themesTo', 'OneDarkPro.json'))

    // 转换多个文件
    converter.convertThemeFromDir(path.resolve(__dirname, 'themesFrom'), path.resolve(__dirname, 'themesTo'))
} catch (error) {
    console.log(error)
}