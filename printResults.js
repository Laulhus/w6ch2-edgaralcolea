const debug = require("debug")("node-calculator");
const chalk = require("chalk");

const printResults = (first, second) => {
  debug(`Has introducido ${chalk.green(first)} y ${chalk.green(second)}`);
  debug(`Resultados:`);
  debug(
    `${chalk.blue(+first)} ${chalk.cyan("+")} ${chalk.blue(
      +second
    )} ${chalk.blue("=")} ${chalk.black.bgWhite(+first + +second)}`
  );
  debug(
    `${chalk.blue(first)} ${chalk.cyan("-")} ${chalk.blue(second)} ${chalk.blue(
      "="
    )} ${chalk.black.bgWhite(first - second)}`
  );
  debug(
    `${chalk.blue(first)} ${chalk.cyan("*")} ${chalk.blue(second)} ${chalk.blue(
      "="
    )} ${chalk.black.bgWhite(first * second)}`
  );
  debug(
    `${chalk.blue(first)} ${chalk.cyan("/")} ${chalk.blue(second)} ${chalk.blue(
      "="
    )} ${chalk.black.bgWhite(first / second)}`
  );
};

module.exports = { printResults };
