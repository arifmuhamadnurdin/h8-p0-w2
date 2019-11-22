//1. Melakukan Looping Menggunakan While
var i=2;
console.log('LOOPING PERTAMA')
while (i<=20)
{
  console.log(i + " - I love coding")
  i++
}

var i=20
console.log('LOOPING KEDUA')
while (i>1)
{
  console.log(i + " - I will become fullstack developer");
  i-=2
}


//2. Melakukan Looping Menggunakan For

console.log('LOOPING PERTAMA')
for (let i = 1; i <= 20; i++){
  console.log(i + " - I love coding")
}


console.log('LOOPING KEDUA')
for (let i = 20; i >= 1; i--){
  console.log(i + " - I will become fullstack developer")
}


//3. Angka Ganjil dan Genap

//3.1

for (let i = 1; i <= 100; i++){
  console.log(i)
}

//3.2

console.log('GANJIL')
for (let i = 1; i <= 100; i++){
  if(i % 2 != 0)
  console.log(i + ' ganjil')
}


console.log('GENAP')
for (let i = 2; i <= 100; i++){
  if(i% 2 == 0)
  console.log(i + ' genap')
}

//3.3
console.log('Kelipatan 3')
for (let i = 1; i < 100; i++){
  console.log(i+=2 , 'kelipatan 3')
}

console.log('Kelipatan 6')
for (let i = 1; i < 96; i++){
  console.log(i+=5, 'kelipatan 6')
}

console.log('Kelipatan 10')
for (let i = 1; i < 100; i++){
  console.log( i+=9, 'kelipatan 10')
}