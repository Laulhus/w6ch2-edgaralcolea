require("dotenv").config();
const debug = require("debug")("node-calculator");
const { first, second } = require("./numbers");
const { getNumbers } = require("./getNumbers");
const { printResults } = require("./printResults");

if (!first && !second) {
  getNumbers();
} else if (!first || !second) {
  debug(
    "Introduce primer número con -f o --first <número> y segundo con -s o --second <número>"
  );
  process.exit();
} else {
  printResults(first, second);
}
