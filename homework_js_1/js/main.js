'use strict';

let name;
let age;
  name = prompt('Whats your name?');
  age = prompt('How old are you?');

if(age<18)
{
alert("You are not allowed to visit this website!");
}
if(18<=age && age<=22)
{
let question = confirm('Are you sure you want to continue?');
if(question==true)
{
alert(`Welcome, ${name}!`);
}
else{
alert('You are not allowed to visit this website.');
}
}
if(age>22){
alert(`Welcome, ${name}!`);
}