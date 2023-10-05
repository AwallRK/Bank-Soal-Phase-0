/* Dengan menggunakan function groupAndJoin buatlah sesuai output yang diminta. */
function groupAndJoin(data) {
  let obj = {
    nama: data.nama,
    tokenCollected: {},
  };
  let tokens = data.tokens;
  for (let perBaris of tokens) {
    // console.log(perBaris);
    let key = perBaris[0];
    let value = perBaris[1];
    if (obj.tokenCollected[key] === undefined) {
      obj.tokenCollected[key] = "";
    }
    obj.tokenCollected[key] += value;
  }
  return obj;
}
let gajC1 = {
  nama: "Baba",
  tokens: [
    ["YOMAN", "Y"],
    ["YES", "Y"],
    ["YOMAN", "O"],
    ["YOMAN", "M"],
    ["YES", "S"],
    ["TOP", "P"],
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
    ["ABC", "B"],
    ["DEF", "D"],
    ["ABC", "C"],
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

/* Dengan menggunakan groupAndGroupArr buatlah sesuai output yang diminta */
function groupAndGroupArr(data) {
  let obj = {
    classroom: data.nama,
    students: {},
  };

  // let classroom = data.nama;
  let students = data.students;
  // obj.classroom = classroom;
  // obj.students = {};
  for (let studentName of students) {
    console.log(studentName);
    let property = studentName[1];
    let nameStudent = studentName[0];
    if (obj.students[property] === undefined) {
      obj.students[property] = [];
    }
    obj.students[property].push(nameStudent);
  }

  return obj;
}
let gagaC1 = {
  nama: "Kelas XI",
  students: [
    ["Gamma", "A"],
    ["Helio", "A"],
    ["Indiana", "B"],
    ["Jameskun", "A"],
    ["Kilo", "C"],
    ["Lmao", "B"],
  ],
};
console.log(groupAndGroupArr(gagaC1));
/*
  Output:
  {
    classroom: "Kelas XI",
    students: {
      A: ["Gamma", "Helio", "Jameskun"],
      B: ["Indiana", "Lmao"],
      C: ["Kilo"]
    }
  }
*/

let cat = {
  name: "Shiro",
  Type: "Persian",
  "Warna Bulu": "Putih",
  makananFav: ["ikan", "whiskas", "Steak"],
  umur: 10,
  sudahSteril: true,
  bersuara: function () {
    return `${this.name} mengeong sambil mengibaskan ekor`;
  },
};

console.log(cat.bersuara());
