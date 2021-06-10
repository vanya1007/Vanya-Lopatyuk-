function createNewUser() {
    this.userName = prompt("Введіть ім'я: ",'');
    this.userSecondName = prompt('Введіть прізвище','');
    this.getLogin = function(){
    let newLogin = this.userName.charAt(0).toLowerCase() + this.userSecondName.toLowerCase();
    return newLogin;
    }
}
let newUserObj = new createNewUser();
alert(`Ваш логін: ${newUserObj.getLogin()}`);