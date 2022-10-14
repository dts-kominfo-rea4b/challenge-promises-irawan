const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
//const promiseOutput = null;
//const marah = true;
//const ApakahMarah = new Promise((resolve, reject) => {
     //if(marah)
     //let mrh=mrh+1;
     //else
     //let tdkmrh=tdkmrh+1;
//})

const promiseOutput = async (emosi) => {
  const theaterIXX = await promiseTheaterIXX();
  const theaterVGC = await promiseTheaterVGC();

  const concateJson = theaterIXX.concat(theaterVGC);
  let totalEmosi = 0;

  for (i = 0; i < concateJson.length; i++) {
    if (concateJson[ i ].hasil == emosi) {
      totalEmosi += 1;
      //console.log(totalMood);
    }
  }
 
  return totalEmosi;
};

//console.log("Total Mood :"+totalMood);
//  console.log("Concate JSON :"+concateJson.length);
//  console.log("irawan");

module.exports = {
  promiseOutput,
};
