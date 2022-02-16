const { program } = require("commander");

program.option("-f, --first <number>");
program.option("-s, --second <number>");
program.option("-p, --port <number>");
program.parse();

const { first, second } = program.opts();
const { port } = program.opts();

module.exports = { first, second, port };
