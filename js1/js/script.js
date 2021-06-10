let userName = prompt("Введіть ім'я",'');
let userAge = Number(prompt('Введіть ваш вік',''));
if (userAge<18){
        alert('Ви не можете відвідувати даний сайт!');
}
else if (userAge>=18 && userAge<=22){

    if (confirm('Ви хочете продовжити?')){
        alert(`Вітаємо, ${userName}`);
    }
    else {
        alert('Ви не можете відвідавати даний сайт!');
    }
}
else {
    alert(`Вітаємо, ${userName}`)
}