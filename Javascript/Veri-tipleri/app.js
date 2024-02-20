/*
? Veri Tipleri

1- String
2- Number
3- Boolean
4- Null
5- Undefined
6- Object
7- Function
*/

// 1)
let isim = "Veysel İmrak 22 yaşındadır.";
console.log(isim);
console.log(typeof isim);

// 2) Number tam veya noktalı sayıların tamamını kapsar.
let sayi1 = 10;
let sayi2 = 5.2;
console.log(sayi1 + sayi2);
console.log(typeof sayi1);
console.log(typeof sayi2);

let stringDegisken = "Yaşınız :";
let yas = 23;
console.log(stringDegisken + yas);

// 3) Boolean true false'dan oluşur.
console.log(5>8);

// 4)
let a = null; // boş anlamına gelir.
console.log(a);
a = 27;
console.log(a);

// 5) undefined tanımlanmamış veri tipi
// let a;
// console.log(a);
// console.log(typeof a);

// 6) Object veri tipi = Python dictionary
// Primitive() ve referans tiplere göre değişir.
let insan = 
{
    isim : "Veysel",
    soyisim:"İmrak",
    yas: 23
}
console.log(insan);
console.log(typeof insan);
let rakamlar = [1,2,3,4,5];
console.log(typeof rakamlar);

// 7)
let func = function()
{
    console.log("Merhaba");
}
func();
console.log(typeof func);
