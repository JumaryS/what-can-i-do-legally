const legalStuff = require('./back-end.js')

const age = getInput(0)
const outPut = legalStuff(age)
console.log(outPut)



function getInput(i) {
  return process.argv[i + 2];
}
