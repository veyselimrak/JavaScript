// Örnek 1 Mükemmel sayı bulma 
// function mukemmelSayi(sayi)
// {
//     toplam = 0
//     for(i=1;i<=sayi;i++)
//     {
//         if(sayi%i==0)
//         {
//             toplam += i
//         }
//     }
//     return toplam
// }

// let sayi = Number(prompt("Lütfen bir sayı giriniz :"))

// let toplamDeger = mukemmelSayi(sayi)
// if(toplamDeger == (sayi * 2))
// {
//     console.log("Bu sayı mükemmel sayıdır.")
// }
// else
// {
//     console.log("Bu sayı mükemmel sayı değildir.")
// }
//Örnek 2 10 luk sayıyı 2 lik sayıya çevirme

// function decimalToBinary(sayi)
// {
//     let binary = ""
//     while(true)
//     {
//         binary += (sayi%2).toString()
//         sayi = Math.floor(sayi/2)
//         if(sayi==1)
//         {   
//             binary += 1
//             break
//         }
//     }
//     let result = reverse(binary)
//     console.log("sonuç : " + result)
// }
// function reverse(binary)
// {
//     let reverseBinary = ""
//     for(i=binary.length - 1;i>=0;i--)
//     {
//         reverseBinary += binary.charAt(i)
//     }
//     return reverseBinary
// }

// let sayi = Number(prompt("Lütfen bir sayı giriniz: "))
// let binary = decimalToBinary(sayi)


// Örnek 3 10 luk sayıyı2 lik sayıya çevirme

// function binaryToDecimal(binary)
// {
//     toplam = 0;
//     ust = 0;
//     for(i=(binary.length-1);i>=0;i--)
//     {
//         toplam += Number(binary.charAt(i)) * Math.pow(2,ust)
//         ust++
//     }
//     console.log("Sonuç : " + toplam)
// }
// let binary = prompt("İkilik sistemde bir sayı giriniz: ")
// binaryToDecimal(binary)