/* Dengan menggunakan groupAndObjects buatlah sesuai output yang diminta */
function groupAndObjects(obj) {}
let gaoC1 = {
  name: "SMAN 19987",
  student: {
    list: [
      { name: "Managix", class: "Z" },
      { name: "Nono", class: "Y" },
      { name: "Omaygaid", class: "Z" },
      { name: "Probobo", class: "Y" },
      { name: "Quin", class: "Z" },
      { name: "Stuart", class: "X" },
    ],
  },
};
console.log(groupAndObjects(gaoC1));
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
