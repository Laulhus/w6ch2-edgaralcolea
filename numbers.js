const { program } = require("commander");

program.option("-f, --first <number>");
program.option("-s, --second <number>");
program.parse();

const { first, second } = program.opts();

module.exports = { first, second };
