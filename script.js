function generate(){

    //set length/complexity
    let complexity = document.getElementById("slider").value; 

    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

    let password = "";

    //for loop related to password length
    for(var i = 0; i <= complexity; i++){

        password = password + values.charAt(Math.floor(Math.random() * Math.floor(value.length - 1)))
    }
}