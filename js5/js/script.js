function createNewUser(){
    let newUser = {
        getLogin: function() {
            return console.log(this.UserFirstName[0].toLowerCase() + this.userSecondName.toLowerCase()) ;
        },

        getAge: function () {
            let time = new Date();
            let currentYear = time.getFullYear();
            let inputDay = +this.userBirthday.substring(0, 2);
            let inputMonth = +this.userBirthday.substring(3, 5);
            let inputYear = +this.userBirthday.substring(6, 10);
            
            let birthDate = new Date(inputYear, inputMonth-1, inputDay);
            let birthYear = birthDate.getFullYear();
            let age = currentYear - birthYear;
            if (time < new Date(birthDate.setFullYear(currentYear))) {
                age = age - 1;
            }
            return console.log(age);
        },
        getPassword: function () {

            return console.log(this.UserFirstName[0].toUpperCase() + this.userSecondName.toLowerCase() + this.userBirthday.substring(6,10));
        }
    };
    newUser.UserFirstName = prompt("Напишіть своє ім'я");
    newUser.userSecondName = prompt("Напишіть своє прізвище");
    newUser.userBirthday = prompt("Напишіть дату свого народження: ");
    newUser.getAge();
    newUser.getPassword();

    return newUser;
}
createNewUser();