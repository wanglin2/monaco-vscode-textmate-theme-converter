#! /usr/bin/env node

const {
    program
} = require('commander');
const {
    convertThemeFromDir,
    convertThemeFromFilePath
} = require('./index');
const fs = require('fs-extra');
const path = require('path');

program
    .version("1.0.0")
    .requiredOption('-i, --input <inputPath>', '指定一个文件或文件夹')
    .option('-o, --output <outputPath>', '指定一个输出路径');

program.parse(process.argv);
const options = program.opts();

if (options.input) {
    const {
        input
    } = options;

    const exists = fs.existsSync(input);
    if (!exists) throw Error('路径不存在');

    const stats = fs.statSync(input);
    const isDirectory = stats.isDirectory();
    if (isDirectory) {
        convertThemeFromDir(input, options.output || '.mvttc/converted');
    } else {
        convertThemeFromFilePath(input, options.output || `.mvttc/converted/${path.basename(input)}`);
    }
}