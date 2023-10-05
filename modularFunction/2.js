// getFirstName untuk mendapatkan first name
function getFirstName(str) {
  // code here
}

// getTitle untuk mendapatkan title
// age lebih dari 17 adalah kakak
// age 17 kebawah adalah adik
function getTitle(num) {
  // code here
}

// autoGreeting main function yang akan memanggil function helper lain
function autoGreeting(str, num) {
  // code here
}

const fullName = "Meicy Fox";
const age = 16;
console.log(autoGreeting(fullName, age));
// OUTPUT: "Hello, adik Meicy"

const fullName2 = "Janu Fox";
const age2 = 25;
console.log(autoGreeting(fullName2, age2));
// OUTPUT: "Hello, kakak Janu"

/* VALIDASI CASE */
const fullName3 = 100;
const age3 = 0;
console.log(autoGreeting(fullName3, age3));
// OUTPUT: "Fullname harus berisi sebuah string"

console.log(autoGreeting());
// OUTPUT: "Fullname tidak boleh kosong"
