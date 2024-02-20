/*
-------Scope (Kapsam)---------

    -> Global Scope :Heryerden erişilebilir. 
    -> Function Scope
    -> Block Scope
*/
// var a = 5;

// if(true)
// {
//     console.log(a);
// function method1()
// {
//     var sayi=10;
//     console.log(sayi);
    // method1 fonksiyonu içerisinde oluşturulan 
    //değişkenler sadece fonksiyon içinde erişilebiilen scope türüdür.
// }

// method1();


var c=4; //global scope

function method()
{
    var a=5; // function scope
    // function parantezleri arasında kalan  yerler function scope örneğidir.
    if(true){
        var b=7; //block scope
        // if'in içerisi block scope örneğidir.
    }
}

// Var -- Let -- Const Farkları
// en keskin özellikleri var geniş çaplı bir değişken block içerisinde tanımlansada function scope gibi davranır.
// var: function scope -- ram bellekte çok fazla yer kaplar.

function selamver()
{
    var selam = "Herkese selam"; // function scope
    console.log(selam);
    if(true)
    {
        let c=10;
        var b=10; //  var kullanıldığı için block scope ama function içerisinde olduğundan function scope gibi davranır.
    }
    console.log(c);
}

selamver()
// let kullanıldığında aynı değişken isminden birden fazla değişken oluşturulamaz. var ile oluşturulabilir.
// let -const farkı const sonradan değiştirilemez const değişkenleri sabit değerlidir.

let a=5;
console.log(a);

const user = {
    username : "enes",
    password : "123"
}
user.username="enesbayram";

console.log(user);