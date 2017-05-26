const printAST = require("ast-pretty-print");

const whitelist = ["FunctionDeclaration", "FunctionExpression"];

function test(maybeNode) {
  return maybeNode && maybeNode.type && whitelist.includes(maybeNode.type);
}

function print(node) {
  return printAST(node, false);
}

module.exports = { print, test };
