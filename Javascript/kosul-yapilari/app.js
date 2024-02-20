let vize1 = Number(prompt("Vize 1 notunuzu giriniz: "));
let vize2 = Number(prompt("Vize 2 notunuzu giriniz: "));
let final = Number(prompt("Final notunuzu giriniz: "));

vize1 = (vize1 * 3) / 10;
vize2 = (vize2 * 3) / 10;
final = (final * 4) / 10;
ortalama = vize1 + vize2 + final

if( ortalama >= 50)
{
    console.log("Dersden geçtiniz.");
}
else{
    console.log("Dersden kaldınız.");
}


