// console.log("Menyalakan mesin kopi");
// console.log("Menggiling biji kopi");
// console.log("Memanaskan air");
// console.log("Mencampurkan air dan kopi");
// console.log("Menuangkan kopi ke dalam gelas");
// console.log("Menuangkan susu ke dalam gelas");
// console.log("Kopi Anda sudah siap!");



// console.log(coffeStock)



//import object 
const coffeeStock = require('./state');

const makeCoffe = (type, miligram) =>  {
    if (coffeeStock[type] >= miligram) {
        console.log("Kopi Berhasil dibuat");
    } else {
        console.log("Biji Kopi Habis");
    }
}

makeCoffe("robusta", 80);





