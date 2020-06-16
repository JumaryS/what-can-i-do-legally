const legalStuff = require('./back-end.js')
// gets user's age from the console  / age is made as a param for the function legalStuff
const age = getInput(0)
//gets user's message based on that age from the back end
const outPut = legalStuff(age)
//print it out for the user
console.log(outPut)



function getInput(i) {
  return process.argv[i + 2];
}
