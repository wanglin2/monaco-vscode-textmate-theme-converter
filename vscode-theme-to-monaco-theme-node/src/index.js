const fs = require('fs-extra')
const path = require('path')
const vscodeThemeToMonacoThemeWeb = require('vscode-theme-to-monaco-theme-web')

/** 
 * javascript comment 
 * @Author: 王林25 
 * @Date: 2021-09-24 14:47:40 
 * @Desc: 转换单个文件 
 */
exports.convertThemeFromFilePath = function (inputFilePath, outputFilePath) {
    const exists = fs.existsSync(inputFilePath);
    if (!exists) throw Error('文件不存在');

    const stats = fs.statSync(inputFilePath);
    const isFile = stats.isFile();
    if (!isFile) throw Error('请选择文件路径');

    let themeFile = fs.readFileSync(inputFilePath).toString();
    const convertedTheme = vscodeThemeToMonacoThemeWeb.convertTheme(themeFile);
    fs.ensureFileSync(outputFilePath);
    fs.writeFileSync(outputFilePath, JSON.stringify(convertedTheme, null, 4));
}

/** 
 * javascript comment 
 * @Author: 王林25 
 * @Date: 2021-09-24 15:50:00 
 * @Desc: 转换多个文件 
 */
exports.convertThemeFromDir = function (inputDir, outDir) {
    const callBack = async (fileName) => {
        try {
            const filePath = path.join(inputDir, fileName);
            if ((await fs.stat(filePath)).isDirectory()) {
                return;
            }
            exports.convertThemeFromFilePath(filePath, path.join(outDir, fileName.replace(/\.jsonc$/, '.json')))
        } catch (err) {
            throw new Error(err);
        }
    }
    fs.readdirSync(inputDir).map(callBack);
}