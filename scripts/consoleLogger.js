document.addEventListener('DOMContentLoaded', function(){

document.addEventListener('formValid', function(event){

console.clear();

const data = event.detail;

console.log("ФИО:", data.fullname);
console.log("Email:", data.email);
console.log("Тема:", data.topic);
console.log("Сообщение:", data.message);

console.log("Дата:", new Date().toLocaleString());

});

});