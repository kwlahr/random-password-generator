function generate(){

    //set length/complexity
    let complexity = document.getElementById("slider").value; 

    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

    let password = "";

    //for loop related to password length
    for(var i = 0; i <= complexity; i++){

        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)))
    }

    //add password to text box
    document.getElementById("display").value = password;

    //password history
    document.getElementById("last-passwords").innerHTML += password + "<br>"
}

//set default length display of 10
document.getElementById("length").innerHTML = "Length: 10";

//var for slider value

//function to set length to slider position
document.getElementById("slider").oninput = function(){
    var sliderValue = document.getElementById("slider").value -1;

    if(document.getElementById("slider").value > 0){
    document.getElementById("length").innerHTML = "Length: " + sliderValue;
    //document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
    }
    else{ 
    document.getElementById("length").innerHTML = "Length: 1";
    }
}

//copy to clipboard function
