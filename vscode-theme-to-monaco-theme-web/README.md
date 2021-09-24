## vscode-theme-to-monaco-theme-web

一个将`VSCode`主题转换成`Monaco Editor`主题的工具。

## 安装

```sh
npm i vscode-theme-to-monaco-theme-web
```

## 作为UMD模块使用:

```js
const vscodeThemeToMonacoThemeWeb = require('vscode-theme-to-monaco-theme-web')
const convertedTheme = vscodeThemeToMonacoThemeWeb.convertTheme(themeData)
```

## 作为ES Module使用：

```js
import * as vscodeThemeToMonacoThemeWeb from 'vscode-theme-to-monaco-theme-web'
vscodeThemeToMonacoThemeWeb.convertTheme(themeData)
```

## 转换方法：convertTheme(theme, addDefaultToken = true, defaultColor = '#ffffff')

theme：vscode主题数据，可以是对象，也可以是字符串

addDefaultToken：是否要添加默认token，作为没有匹配到的token，默认为true

defaultColor：默认token的foreground值默认取的是theme.colors['editor.foreground']，如果没有该值，则取本参数的值，默认为#ffffff