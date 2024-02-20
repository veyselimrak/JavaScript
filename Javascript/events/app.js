// ! Event Kullanımı
//addEventsListener()
//  ! en sık bu şekilde kullanılır.
// function changeTitle(e)
// {
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     document.querySelector('.card-title').textContent = 'Yeni Todo listesi değiştirildi.';
// }
// const celarButton = document.querySelector('#todoClearButton');
// celarButton.addEventListener('click', changeTitle)
// change title da parantez koyulursa metodu hemen çalıştırır.
// parantez koyulmazsa tıklandığında çalıştırılır. istenildiği gibi


/*
! Mouse Eventları en sık kullanılanlar
DOMContentLoaded
load
click
dbclick
mouseover
mouseout
mouseenter
mouseleave
*/  
// window.addEventListener('load ', run);
// function run()
// {
//     console.log('Sayfa Yüklendi.');
// }

// const cardTitle = document.querySelectorAll('.card-title')[1];
// const cardBody = document.querySelectorAll('.card-body')[1];
// cardTitle.addEventListener('mouseenter', run);
// cardTitle.addEventListener('mouseleave', run);

// function run(e){
//     console.log(e.type);
// }


// ! Klavye Eventları  
/*
keypress : sadece klavyeden harfleri ve sayıları algılayabilir.
keydown : Klavyedeki herhangi bir tuş ile çalışabilir.
keyup tuştan elini kaldırdığında çalışır.
*/  
// document.addEventListener("keyup", run);
// function run(e)
// {
    // console.log(e.type);
    // console.log(e.keyCode);
    // if(e.keyCode == 116)
    // {
    //     alert('Sayfa yenileme engellendi.')
    // }
    // e.preventDefault();
    // console.log(e.keyCode);
    // console.log(e.which);
// }

// const cardTitle = document.querySelectorAll('.card-title')[0];
// const input = document.querySelector('#todoName');

// input.addEventListener('keyup', run);
// console.log(input);
// function run(e)
// {
//     cardTitle.textContent = e.target.value;
// }

// ! İnput Events
/*
focus input içine tıkladığında odaklandığında çalışır.
blur inputtan çıktığında tetiklenir.
copy input içindeki değeri kopyalarsak çalışır.
paste  inputa yapıştırma işleminde çalışır.
cut input içindeki datayı keserse çalışır.
select
*/
// const todo = document.querySelector('#todoName');
// todo.addEventListener('focus', run);
// todo.addEventListener('blur', run);
// todo.addEventListener('copy', run);
// todo.addEventListener('paste', run);
// todo.addEventListener('cut', run);
// todo.addEventListener('select', run);

// function run(e)
// {
//     console.log(e.type);
// }

