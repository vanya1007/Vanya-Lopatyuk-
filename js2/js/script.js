let userFirstNumber = +prompt('Введіть число m','');
    while(userFirstNumber.toFixed()!=userFirstNumber){
        userFirstNumber = +prompt('Введіть число n','');
    }
    if (userFirstNumber <=2){
        userFirstNumber = 2;
    }
let userSecondNumber = +prompt('Введіть число n','');
    while(userSecondNumber.toFixed()!=userSecondNumber || userFirstNumber > userSecondNumber){
        userSecondNumber = +prompt('Введіть число n знову і більше за число m','');
    }
for (let i=userFirstNumber;  i<=userSecondNumber; i++) {
    let counter = 0;
    for (let j=1; j<=i; j++) {
        if (i%j) {continue;}
        counter += 1;
    }
    if (counter === 2) {
        console.log(i);
    }
}