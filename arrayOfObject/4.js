/* Dengan menggunakan function groupByCount buatlah sesuai output yang diminta */
function groupByCount(data) {
  let output = {};

  for (let value of data) {
    // console.log(value);
    let nama = value.nama;
    // console.log(nama);
    if (output[nama] === undefined) {
      output[nama] = 0;
    }
    output[nama]++;
  }
  // console.log(output);
  return output;
}
let gbcC1 = [
  { nama: "Alpha" },
  { nama: "Beta" },
  { nama: "Charlie" },
  { nama: "Beta" },
  { nama: "Charlie" },
  { nama: "Charlie" },
];
console.log(groupByCount(gbcC1));
/*
  Output:
  { Alpha: 1, Beta: 2, Charlie: 3  }
*/
