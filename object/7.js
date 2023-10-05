/* Dengan menggunakan groupAndObjects buatlah sesuai output yang diminta */
function groupAndObjects(obj) {
  let output = {
    school: obj.name,
    class: {},
  };
  let student = obj.student.list;
  // console.log(student);
  for (let list of student) {
    // console.log(list);
    let key = list[1];
    let value = list[0];
    if (output.class[key] === undefined) {
      output.class[key] = { list: [] };
    }
    output.class[key].list.push(value);
  }
  return output;
}
let gaoC1 = {
  name: "SMAN 19987",
  student: {
    list: [
      ["Managix", "Z"],
      ["Nono", "Y"],
      ["Omaygaid", "Z"],
      ["Probobo", "Y"],
      ["Quin", "Z"],
      ["Stuart", "X"],
    ],
  },
};
console.dir(groupAndObjects(gaoC1), { depth: null });
/*
  Output:
  {
    school: "SMAN 19987",
    class: {
      Z: {
        list: ["Managix", "Omaygaid", "Quin"]
      },
      Y: {
        list: ["Nono", "Probobo"]
      },
      X: {
        list: ["Stuart"]
      }
    }
  }
*/
