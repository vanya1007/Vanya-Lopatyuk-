
let quantityList = +prompt("Введіть кількість елементів списку ", "5");

let addLi = [];
    for (let i = 0; i<quantityList; i++) {
        let countList = prompt("Введіть будь-який текст ", "будь-який текст");
        addLi[i] = countList;
    }
    const mapArray = `<ul> ${addLi.map(list => `<li> ${list}</li>`)} </ul>`;
    let splitAndJoin = mapArray.split(',').join('');

    document.getElementById('container').innerHTML = splitAndJoin;
//лічильник
let sec = 10;
function timeSec() {
    if (sec < 1) {
        document.body.innerHTML = '';
    }
    else {
        document.getElementById('timer').innerHTML = sec;
        setTimeout(timeSec, 1000);
        sec--;
    }
}
timeSec();