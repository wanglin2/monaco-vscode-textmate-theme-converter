## vscode-theme-to-monaco-theme-node

一个将`VSCode`主题转换成`Monaco Editor`主题的工具，适用于`nodejs`环境。

## 安装

```sh
npm i vscode-theme-to-monaco-theme-node -D
```

## 命令行使用: 
```sh
npx vscode-theme-to-monaco-theme-node -i <input-file-or-folder-path> -o <output-file-or-folder-path>

# e.g. 转换单个文件
# npx vscode-theme-to-monaco-theme-node -i ./vscode-theme.json -o ./monaco-converted-theme.json

# e.g. 转换一个文件夹，将要转换的主题文件放在该文件夹下，只会读取一层目录
# npx vscode-theme-to-monaco-theme-node -i ./vscode-themes -o ./monaco-converted-themes
```

## 编程使用:

```js
const converter = require('vscode-theme-to-monaco-theme-node');

// 转换单个文件
converter.convertThemeFromFilePath(path.resolve(__dirname, 'themesFrom', 'OneDarkPro.jsonc'), path.resolve(__dirname, 'themesTo', 'OneDarkPro.json'))

// 转换多个文件
converter.convertThemeFromDir(path.resolve(__dirname, 'themesFrom'), path.resolve(__dirname, 'themesTo'))
```
