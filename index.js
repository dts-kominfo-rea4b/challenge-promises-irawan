// ! JANGAN DIMODIFIKASI
const { promiseOutput } = require("./promise.js");

(async () => {
  console.log("Jumlah Film Tidak Marah :"+ await promiseOutput("tidak marah")); // Output: 2
  console.log("Jumlah Film Marah :"+ await promiseOutput("marah")); // Output: 4
})();
//console.log("irawan");