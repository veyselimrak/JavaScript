/* DOM
Web sayfasında bulunan elementlerin hepsine DOM denir.
en üstte window bulunur parent olarak onun altı document objesidir.

*/
// const todoList = Array.from(document.querySelectorAll("li:nth-child(odd)"));

// todoList.forEach(function(todo){
//     todo.style.backgroundColor = "lightgrey";
// })

// console.log(todoList);

// console.log(window);

// let value;
// console.log(document.location);
// value = document.location.hostname;
// value = document.location.pathname;
// value = document.characterSet;
// value = document.title;
// value = document.links.item(4).getAttribute('id');
// value = document.links.item(4).getAttribute('class');
// value = document.links.item(4).classList[3];
// value = document.forms.item(1).id;
// value = document.forms.item(1).children;

// console.log(value);



// ! Selectors
//classname, id, tag name
// getElementById : idye göre elementi yakalar.
// getElementByClassName : Class İsmine göre elementi yakalar.
// getElementByTagName : Etiket İsmine göre elementi yakalar.



const button = document.getElementById('todoAddButton') 
// console.log(button.getAttribute('id'));
// console.log(button.className);

// const classListesi = button.classList;
// console.log(classListesi);
// classListesi.forEach(function(className){
//     console.log(className)
// });

// let buttonText = button.textContent; //text content de sadece içeriği ekrana yazdırır.
// let buttonText2 = button.innerHTML; // innerHTML de içeriği değiştirmeye de olanak sağlar.
// console.log(buttonText);
// console.log(buttonText2);
// button.innerHTML = '<b> Todo Ekleyin </b>';

// const todoList = Array.from(document.getElementsByClassName('list-group-item'))
// todoList.forEach(function(todo){
//     console.log(todo.textContent);
// })
// console.log(todoList);

// arraya dönüştürme işlemi Array.from
// const forms = Array.from(document.getElementsByTagName('form'));
// forms.forEach(function(form) {
//     console.log(form)
// })
// console.log(forms[1])

// querySelector - guerySelecterAll getElements metotlarının tamamıyla yaptığımız işlemleri bu iki metotlada yapabiliriz.
// const clearButton = document.querySelector('#todoClearButton');
// console.log(clearButton)

// const todoList = document.querySelector('.list-group');
// console.log(todoList);
// !Eğer getireceğin elementten 1 tane varsa querySlector kullanabilirsin.
//Ancak birden fazla varsa querySelector sadece 1 tanesini getirir.
// Bununn için querySelectorAll metodunu kulllanılması gerekiyor.
// const todoList = document.querySelectorAll('.list-group-item')[3];
// const todoList = document.querySelectorAll('li:nth-child(even)');
// todoList.forEach(function(todo){
//     todo.style.backgroundColor = 'lightgrey';
// })
// odd ve even odd tekleri even çiftleri seçer.
// console.log(todoList);


//!Style özzelliğini anlamak
// const todo = document.querySelectorAll('.list-group-item')[0];
// const todoList = document.querySelector('.list-group');
// todo.style.color = 'red';
// todo.style.backgroundColor = 'purple';
// todo.style.fontWeight = 'bold';
// todo.style.paddingTop = '20px';
// todo.style.paddingLeft = '70px';
// todoList.style.marginTop = '60px';
// const clearButton = document.querySelector('#todoClearButton');
// clearButton.style.backgroundColor = 'red';
// clearButton.style.fontWeight = 'bold';
// clearButton.style.padding = '10px'; 


// !HTML elementleri üzerinde gezinmek Önemli
// const todo = document.querySelector('.list-group-item');
// const todoList = document.querySelector('.list-group');
// const card = document.querySelector('.card');
// const todoLastChild = document.querySelector('.list-group-item:nth-child(4)')
// const row = document.querySelector('.row')
const container = document.querySelector('.container')

let value;
// ? ebeveynden çocuklara erişmek
// value = todoList;
// value = todoList.children[0];
// value = todoList.children[3];
// value = todoList.children[3].textContent = 'Değişti';

// value = Array.from(todoList.children);
// value.forEach(function(todo){
//     console.log(todo)
// })
// ? Çocuktan anneye ulaşmak

// value = todo;
// let ul = todo.parentElement;
// let cardBody = ul.parentElement;
// let cardElement = cardBody.parentElement;
// let row = cardElement.parentElement;7
// let container = row.parentElement;
// console.log(container)

// ? Kardeşler arasında gezinmek 

// value = todo;
// value = todo.nextElementSibling.nextElementSibling.nextElementSibling;
// value = todoLastChild;
// value = todoLastChild.previousElementSibling.previousElementSibling;
// value = row;
// value = row.children[0].children[3].children[0].textContent = 'todo listesi başlığı değişti';

// ! Dinamik olarak element oluşturma
// const cardBody = document.querySelectorAll('.card-body')[1];
// const link = document.createElement('a');
// link.id = 'goBlogWebSite';
// link.className = 'btn btn-dark btn-sm mt-3';
// link.href = 'http://enesbayram.net';
// link.target = '_blank';
// link.innerHTML = 'Kişisel Websiteme git';
// cardBody.appendChild(link);
// console.log(link)
// const todoList = document.querySelector('.list-group');
// const todo = document.createElement('li');
// const todoLink = document.createElement('a')
// const i = document.createElement('i')
// todo.className = 'list-group-item d-flex justify-content-between align-items-start';
// todo.innerHTML = ' Todo 5';

// todoLink.href = '#';
// todoLink.className = 'delete-item';
// i.className = 'fa fa-remove';
// todoLink.appendChild(i);
// todo.appendChild(todoLink);
// todoList.appendChild(todo);

// ! Dinamik olarak element silmek
// const todoList = document.querySelector('.list-group');
// const todos = document.querySelectorAll('.list-group-item');
// // todos[0].remove()
// // todos[1].remove()
// todoList.removeChild(todos[0]);
// console.log(todos);

//  ? Elementlerin yerini  değiştirme

const cardBody = document.querySelectorAll('.card-body')[1];

const newTitle = document.createElement('h2');
newTitle.className = 'card-title';
newTitle.textContent = 'Todo Listesi Yeni';
cardBody.replaceChild(newTitle, cardBody.childNodes[1]);
