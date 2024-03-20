function stringLength(string) {
  let length = 0
  let i = 0

  while (string[i] != undefined) {
    ++length
    ++i
  }

  return length
}

// console.log(stringLength("hello"))
module.exports = stringLength
