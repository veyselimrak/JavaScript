/*
1-Bakiye görüntüleme
2-Para çekme
3-Para yatırma
4-Çıkış
*/

let bakiye = 1000;
let yeniSatir = "/r/n";
let metin = "1-Bakiye görüntüleme" + yeniSatir
+ "2-Para çekme" + yeniSatir
+ "3-Para yatırma" + yeniSatir 
+ "4-Çıkış"  + yeniSatir
+ "Lütfen bir değer seçiniz";

let secim = prompt(metin);

switch(secim)
{
    case "1":
        alert("Bakiyeniz : " + bakiye);
        break;
    case "2":
        let cekilecekTutar = Number(prompt("Çekmek istediğiniz tutarı giriniz: "));
        if(cekilecekTutar<bakiye)
        {
            alert("Bakiyenizden fazla para çekemezsiniz" + yeniSatir
            + "Bakiyeniz : "+bakiye + " " + "Çekilecek Tutar: " + cekilecekTutar);
        }
        break;

    case "3":
        let yatirilacakTutar = Number(prompt("Yatırılacak tutarı giriniz : "));
        bakiye += yatirilacakTutar;
        alert("Güncel bakiyeniz : "+  bakiye);
        break
    case "4":
        alert("Sistemden çıkış yapılmıştır.");
        break;
    default:
        alert("Lütfen 1 - 4 arasında değer giriniz !");
        break;
    }

