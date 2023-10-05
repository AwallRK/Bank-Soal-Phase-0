/* Buatlah sebuah array of object dengan key nama, umur dan nilai menggunakan function createArrObject. */
function createArrObject(arr) {
  // Code
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    let perArr = arr[i];
    let nama = perArr[0];
    let umur = perArr[1];
    let nilai = perArr[2];

    let obj = {
      nama: nama,
      umur: umur,
      nilai: nilai,
    };
    result.push(obj);
    // let obj1 = {
    //   nama,
    //   umur,
    //   nilai,
    // };
    // console.log(obj, obj1);
  }
  return result;
}
console.log(
  createArrObject([
    ["Andi", 15, 80],
    ["Budi", 17, 90],
    ["Cadi", 18, 100],
  ])
);
/*
  Output
  [
    { nama: "Andi", umur: 15, nilai: 80 },
    { nama: "Budi", umur: 17, nilai: 90 },
    { nama: "Cadi", umur: 18, nilai: 100 },
  ]
*/
console.log(
  createArrObject([
    ["Ani", 18, 90],
    ["Bani", 19, 100],
    ["Cani", 18, 70],
  ])
);
/*
  Output
  [
    { nama: "Ani", umur: 18, nilai: 90 },
    { nama: "Bani", umur: 19, nilai: 100 },
    { nama: "Cani", umur: 18, nilai: 70 },
  ]
*/
