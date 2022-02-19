function palindrome(str) {
  str = str.replace(/\s+|\W+|-|_/ig, "");
  str = str.toLowerCase();
  str = str.split("");
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[(str.length - 1) - i]) {
      return false
    }
  }
  return true;
}

console.log(palindrome("eye"));
console.log(palindrome("2_A3*3#A2"));
console.log(palindrome("almostomla"));
console.log(palindrome("A man, a plan, a canal. Panama"));
