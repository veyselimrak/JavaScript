/*
------ Diyalog Kutuları ------
    1-Alert
    2-Prompt
    3-Confirm
*/
alert("İşleminize devam etmeden önce kaydetmelisiniz.");

// Kullanıcıdan değer alma (Prompt)
let isim = prompt("İsminizi giriniz: ")
console.log(isim);

// Number(prompt()) olarak kullanılırsa alınan değeri number tipine dönüştürür.
let sonuc = confirm("Silmek istediğinize emin misiniz") // onaylamak
console.log(sonuc);
