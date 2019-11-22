//1. Menyusun Barisan Bintang
var rows1 = 5
for(let i=1; i<=rows1; i++){
    console.log("*")
}

//2. Menyusun Barisan Bintang Dengan Nested Looping
var rows2 = 5
for(let i = 1; i <= rows2; i++) {
    let hasil = ''
    for(let x = 1; x <= rows2; x++) {
      hasil += '*'
    }
    console.log(hasil);
  }

//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var rows3 = 5
for (let i = 1; i <= rows3; i++) {
    let hasil = ''
    for(let x=1; x<=i; x++) {
        hasil += '*'
    }
    console.log(hasil)
}