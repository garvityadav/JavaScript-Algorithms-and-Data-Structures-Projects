function rot13(str) {
  str = str.split(" ");
  str = str.map(user => {
    user= user.split("");
    user= user.map(temp => {
    //to check if there is anything other than [A-Z]
      if(temp ==temp.match(/\W+/g)){
        return temp
      }
      if (temp.charCodeAt() >= 78) {
       return temp= String.fromCharCode(temp.charCodeAt() - 13);
      }
      else {return temp = String.fromCharCode(temp.charCodeAt() + 13) }

    })
    return user.join("");
  });
  str = str.join(" ");
  return str
}

rot13("CVMMN!");
