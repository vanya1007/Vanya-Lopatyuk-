'use strict';
let second=prompt("Enter the number");
let arr=[];
for(let first=0;first<=second;first++)
{
    if(first % 5 == 0){
        arr.push(first);
    }   
}
if(arr.length != 0)
{
        console.log(arr);
}
else{ 
        console.log('Sorry, no numbers');
}