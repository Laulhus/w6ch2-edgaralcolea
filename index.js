require("dotenv").config();
const debug = require("debug")("node-calculator");
const http = require("http");
const url = require("url");
const { first, second } = require("./numbers");
let { port } = require("./numbers");
const { getNumbers } = require("./getNumbers");
const { printResults } = require("./printResults");

if (typeof port === "undefined") {
  port = process.env.DEFAULT_PORT;
}

const server = http.createServer();
server.listen(port, () => {
  debug(`Server is up in http://localhost:${port}`);
});
server.on("error", (error) => {
  debug(`Error on server: ${error.message}`);
});
server.on("request", (request, response) => {
  debug(`Request arrived at ${request.url} with method ${request.method}`);
  const paramsObject = url.parse(request.url, true).query;
  console.log(paramsObject);
  if (request.url === "/calculator") {
    response.statusCode = 200;
    response.write("<h1>Welcome to Node Calculator</h1>");
    response.write(`<div><h2>Resultados:</h2>`);
  } else {
    response.statusCode = 404;
    response.write("<h1>Resource not found</h1>");
  }
  response.end();
});

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
