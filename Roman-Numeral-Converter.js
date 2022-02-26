function convertToRoman(num) {
  let roman = {
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX",
    10: "X",
    20: "XX",
    30: "XXX",
    40: "XL",
    50: "L",
    60: "LX",
    70: "LXX",
    80: "LXXX",
    90: "XC",
    100: "C",
    200: "CC",
    300: "CCC",
    400: "CD",
    500: "D",
    600: "DC",
    700: "DCC",
    800: "DCCC",
    900: "CM",
    1000: "M",
    2000: "MM",
    3000: "MMM"
  };
  if(roman.hasOwnProperty(parseInt(num))){
    return roman[parseInt(num)]
  }

num = num.toString();
num = num.split("");
let newArr  = [];
let arr = [];

for(let i = num.length-1;i>=0;i--){
  newArr.push(10**i);
}
for(let i = 0 ; i<num.length;i++){
  arr.push(num[i]*newArr[i]);
}


let string = "";
for(let i  = 0; i<arr.length;i++){
  if(arr[i]!==0){
  string = string.concat(roman[arr[i]]);}
}

return string


}


console.log(convertToRoman(2014));
