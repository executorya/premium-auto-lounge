document.addEventListener('DOMContentLoaded', function () {

const form = document.getElementById('feedbackForm');

if (!form) return;

form.addEventListener('submit', function(event){

event.preventDefault();

let isValid = true;

// удаляем старые ошибки
document.querySelectorAll('.is-danger').forEach(el=>{
el.classList.remove('is-danger');
});

document.querySelectorAll('.help.is-danger').forEach(el=>el.remove());


// ФИО
const fullname = document.getElementById('fullname');
const fullnameValue = fullname.value.trim();

const words = fullnameValue.split(' ').filter(word=>word.length>0);

if(fullnameValue === ''){
showError(fullname,'Введите ФИО');
isValid = false;
}
else if(words.length < 2){
showError(fullname,'Введите минимум имя и фамилию');
isValid = false;
}


// EMAIL
const email = document.getElementById('email');
const emailValue = email.value.trim();

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(emailValue === ''){
showError(email,'Введите email');
isValid = false;
}
else if(!emailPattern.test(emailValue)){
showError(email,'Неверный формат email');
isValid = false;
}


// сообщение
const message = document.getElementById('message');
const messageValue = message.value.trim();

if(messageValue === ''){
showError(message,'Введите сообщение');
isValid = false;
}


// согласие
const agreement = document.getElementById('agreement');

if(!agreement.checked){
alert('Необходимо согласие на обработку данных');
isValid = false;
}


// если всё ок
if(isValid){

const formData = {
fullname: fullnameValue,
email: emailValue,
topic: document.getElementById('topic').value,
message: messageValue
};

const event = new CustomEvent('formValid',{detail:formData});

document.dispatchEvent(event);

alert('Форма успешно отправлена');

form.reset();

}

});

function showError(input,message){

input.classList.add('is-danger');

const help = document.createElement('p');

help.classList.add('help','is-danger');

help.textContent = message;

input.parentNode.appendChild(help);

}

});
