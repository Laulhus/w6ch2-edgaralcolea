const debug = require("debug")("node-calculator");
const prompt = require("prompt");
const { printResults } = require("./printResults");

const getNumbers = async () => {
  debug("Debes introducir dos números");
  prompt.start();
  await prompt.get(["Primer número", "Segundo número"], (err, result) =>
    printResults(result["Primer número"], result["Segundo número"])
  );
};

module.exports = { getNumbers };
