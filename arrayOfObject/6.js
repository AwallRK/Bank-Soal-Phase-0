/* Dengan menggunakan function groupAndJoin buatlah sesuai output yang diminta. */
function groupAndJoin(data) {}
let gajC1 = {
  nama: "Baba",
  tokens: [
    { word: "YOMAN", token: "Y" },
    { word: "YES", token: "Y" },
    { word: "YOMAN", token: "O" },
    { word: "YOMAN", token: "M" },
    { word: "YES", token: "S" },
    { word: "TOP", token: "P" },
  ],
};
console.log(groupAndJoin(gajC1));
/*
  Output:
  {
    nama: "Baba",
    tokenCollected: {
      YOMAN: "YOM",
      YES: "YS",
      TOP: "P"
    }
  }
*/
let gajC2 = {
  nama: "Foxtrot",
  tokens: [
    { word: "ABC", token: "B" },
    { word: "DEF", token: "D" },
    { word: "ABC", token: "C" },
  ],
};
console.log(groupAndJoin(gajC2));
/*
  Output:
  {
    nama: "Foxtrot",
    tokenCollected: {
      ABC: "BC",
      DEF: "D"
    }
  }
*/
