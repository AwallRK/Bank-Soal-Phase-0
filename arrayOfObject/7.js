/* Dengan menggunakan groupAndGroupArr buatlah sesuai output yang diminta */
function groupAndGroupArr(data) {}
let gagaC1 = {
  nama: "Kelas XI",
  students: [
    { nama: "Gamma", group: "A" },
    { nama: "Helio", group: "A" },
    { nama: "Indiana", group: "B" },
    { nama: "Jameskun", group: "A" },
    { nama: "Kilo", group: "C" },
    { nama: "Lmao", group: "B" },
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
