function checkCashRegister(price, cash, cid) {
  let totalChange = cash - price;
  let newArr = [];
  let object = {};
  /*the total funds in drawer*/
  let money = 0;

  /* checking the total amount in CID*/
  cid.map((user) => {
    money = user[1] + money;
    return money;
  });
  /*if total amount is equal to change*/
  if (totalChange === money) {
    object.status = "CLOSED";
    object.change = cid;
    return object;
  } else {
    for (let i = cid.length - 1; i >= 0; i--) {
      if (cid[i][1] <= cash) {
        /*For hundred*/
        if (cid[i][0] == "ONE HUNDRED") {
          if (totalChange >= 100) {
            let count = 0;
            for (let j = 0; j <= cid[i][1]; j += 100) {
              if (totalChange >= 100) {
                count = j;
                totalChange = totalChange - j;
              }
            }
            if (count > 0) {
              newArr.push([cid[i][0], count]);
            }
          }
        } else if (cid[i][0] == "TWENTY") {
          /*for Twenty*/
          if (totalChange >= 20) {
            let count = 0;
            for (let j = 20; j <= cid[i][1]; j += 20) {
              count = j;
              totalChange = totalChange - 20;
              totalChange = totalChange.toPrecision(4);
            }
            if (count > 0) {
              newArr.push([cid[i][0], count]);
            }
          }
        } else if (cid[i][0] == "TEN") {
        /*for TEN*/
          if (totalChange >= 10) {
            let count = 0;
            for (let j = 10; j <= cid[i][1]; j += 10) {
              if (totalChange >= 10) {
                count = j;
                totalChange = totalChange - 10;
              }
            }
            if (count > 0) {
              newArr.push([cid[i][0], count]);
            }
          }
        } else if (cid[i][0] == "FIVE") {
          /* for FIVE*/
          if (totalChange >= 5) {
            let count = 0;
            for (let j = 5; j <= cid[i][1]; j += 5) {
              if (totalChange >= 5) {
                count = j;
                totalChange = totalChange - 5;
              }
            }
            if (count > 0) {
              newArr.push([cid[i][0], count]);
            }
          }
        } else if (cid[i][0] == "ONE") {
          /*for one*/
          if (totalChange >= 1) {
            let count = 0;
            for (let j = 1; j <= cid[i][1]; j += 1) {
              if (totalChange >= 1) {
                count = j;
                totalChange = totalChange - 1;
              }
            }
            if (count > 0) {
              newArr.push([cid[i][0], count]);
            }
          }
        } else if (cid[i][0] == "QUARTER") {
          /*for quarter*/
          if (totalChange >= 0.25) {
            let count = 0;
            for (let j = 0.25; j <= cid[i][1]; j += 0.25) {
              if (totalChange >= 0.25) {
                count = j;
                totalChange = totalChange - 0.25;
              }
            }
            if (count > 0) {
              newArr.push([cid[i][0], count]);
            }
          }
        } else if (cid[i][0] == "DIME") {
          /*for Dime*/
          if (totalChange >= 0.1) {
            let count = 0;
            for (let j = 0.1; j <= cid[i][1]; j += 0.1) {
              if (totalChange >= 0.1) {
                count = j;
                totalChange = totalChange - 0.1;
              }
            }
            if (count > 0) {
              newArr.push([cid[i][0], count]);
            }
          }
        } else if (cid[i][0] == "NICKEL") {
          /* for Nickel*/
          if (totalChange >= 0.05) {
            let count = 0;
            for (let j = 0.05; j <= cid[i][1]; j += 0.05) {
              if (totalChange >= 0.05) {
                count = j;
                totalChange = totalChange - 0.05;
              }
            }
            if (count > 0) {
              newArr.push([cid[i][0], count]);
            }
          }
        } else if (cid[i][0] == "PENNY") {
          /* for Penny*/
          if (totalChange >= 0.01) {
            let count = 0;
            for (let j = 0.01; j <= cid[i][1]; j += 0.01) {
              if (totalChange >= 0.01) {
                count = j;
                totalChange = totalChange.toPrecision(1) - 0.01;
              }
            }
            if (count > 0) {
              newArr.push([cid[i][0], count]);
            }
          }
        }
      }
    }

    /*if the total change in drawer is zero*/
    if (totalChange === 0) {
      object.status = "OPEN";
      object.change = newArr;
      return object;
    } else {
      /* else INSUFFICIENT_FUNDS as the required cash in drawer is less*/
      object.status = "INSUFFICIENT_FUNDS";
      object.change = [];
      return object;
    }
  }
}

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 1],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);
