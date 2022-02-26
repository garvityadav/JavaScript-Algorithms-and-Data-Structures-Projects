function telephoneCheck(str) {

  /*regex for ten digit number*/
  let regexForTen =
    /^(?:\(\d{3}\)|\d{3})(?:-\d{3}|\d{3}|\s\d{3})(?:-\d{4}|\d{4}|\s\d{4})/g;
    /*regex for eleven digit number */
  let regexForEleven =
    /^(?:1)(?:\(\d{3}\)|\d{3}|\s\d{3}|\s\(\d{3}\))(?:-\d{3}|\d{3}|\s\d{3})(?:-\d{4}|\d{4}|\s\d{4})/g;

/*to count how many digits are there in the string */
  let count = str.match(/\d/g);
  if (count.length === 10) {
    if (regexForTen.test(str)) {
      return true;
    }
  } else if (count.length === 11) {
    if (regexForEleven.test(str)) {
      return true;
    }
  }

  return false;
}

/*test case*/
console.log(telephoneCheck("1 555 555 5555"));
