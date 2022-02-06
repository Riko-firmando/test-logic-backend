const { checkPropTypes } = require("prop-types");

function validateName(str) {
  let name = str.split(" ");
  // check if just one word in a name
  if (name.length == 1) {
    return false + "1";
  }
  // check initial in last name
  if (
    name[name.length - 1].length == 2 &&
    name[name.length - 1].slice(1, 2) == "."
  ) {
    return false + "2";
  }
  for (let i = 0; i < name.length; i++) {
    var compare =
      name[i].slice(0, 1).toUpperCase() + name[i].slice(1, name[i].length);
    //check case sensitive
    if (name[i] !== compare) {
      return false + "3";
    }
    // check dot after word
    if (
      name[i].length > 2 &&
      name[i].slice(name[i].length - 1, name[i].length) == "."
    ) {
      return false + "4";
    }
    // check dot in initial
    if (name[i].length == 1) {
      return false + "5";
    }
    // check if name start with dot
    if (name[i].slice(0, 1) == ".") {
      return false + "6";
    }
  }

  // check word in middle name
  if (
    name.length == 3 &&
    name[0].length == 2 &&
    name[0].slice(1, 2) == "." &&
    name[1].slice(1, 2) != "."
  ) {
    return false + "7";
  }

  return true;
}

console.log(validateName("A. Kesya"), true);
console.log(validateName("A. K. Putri"), true);
console.log(validateName("Angelina K. Putri"), true);
console.log(validateName("Angelina"), false);
console.log(validateName("“a. Kesya"), false);
console.log(validateName("A Kesya"), false);
console.log(validateName("A. Kesya Putri"), false); /////
console.log(validateName("A. Kesya P."), false);
console.log(validateName("Angelina. Kesya Putri"), false);
console.log(validateName(".. Angel"), false);
console.log(validateName("A. De Kesya"), false);
