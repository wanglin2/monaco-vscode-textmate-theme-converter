/** 
 * javascript comment 
 * @Author: 王林25 
 * @Date: 2021-09-24 14:26:09 
 * @Desc: vscode主题转换成monaco editor主题
 * @param theme vscode主题 json对象
 * @param addDefaultToken 是否要添加默认token，作为没有匹配到的token
 * @param defaultColor 默认token的foreground值默认取的是theme.colors['editor.foreground']，如果没有该值，则取本参数的值
 */
export function convertTheme(theme, addDefaultToken = true, defaultColor = '#ffffff') {
    if (typeof theme === 'string') {
        theme = JSON.parse(theme.replace(/(\/\/").+?[\n\r\t]/g, '').replace(/,[\n\r\t]*\}/, '}'));
    }
    const monacoThemeRule = [];
    const returnTheme = {
        inherit: false,
        base: 'vs-dark',
        colors: theme.colors,
        rules: monacoThemeRule,
        encodedTokensColors: []
    };
    theme.tokenColors.map((color) => {
        if (typeof color.scope == 'string') {
            const split = color.scope.split(',');
            if (split.length > 1) {
                color.scope = split;
                evalAsArray();
                return;
            }
            monacoThemeRule.push(Object.assign({}, color.settings, {
                token: color.scope
            }));
            return;
        }
        evalAsArray();

        function evalAsArray() {
            if (color.scope) {
                (color.scope).map((scope) => {
                    monacoThemeRule.push(Object.assign({}, color.settings, {
                        token: scope
                    }));
                });
            }
        }
    });
    if (addDefaultToken) {
        monacoThemeRule.push({
            token: '',
            foreground: theme.colors['editor.foreground'] || defaultColor
        })
    }
    return returnTheme;
}