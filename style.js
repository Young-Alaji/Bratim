// // form validation

// function validateForm(){
     
//     var fullname = document.getElementById('name').value;

//     var phoneNumber = document.getElementById('phone-number').value;

//     var email = document.getElementById('email').value;

//     var message = document.getElementById('message').value;

//     var error = document.getElementById('errorMsg').value;

//     if (fullname =="" && phoneNumber=="" && email =="" && message =="") {
//         error.innerHTML ="Please fill in all Required Fields";
//         return false;
//     }

//     if (fullname =="") {
//         error.innerHTML ="Please fill in the Name Field";
//         return false;
//     }

//     if (phoneNumber =="") {
//         error.innerHTML ="Please fill in the Name Field";
//         return false;
//     }
//     if (email =="") {
//         error.innerHTML ="Please fill in the Email Field";
//         return false;
//     }
//     if (message =="") {
//         error.innerHTML ="Please fill in the Message Field";
//         return false;
//     }

    
// }


function validateForm() {

    // getting fullname    
    var fullname = document.getElementById('name').value;
    // getting phone number 
    var phoneNumber = document.getElementById('phone-number').value;
    // getting email 
    var email = document.getElementById('email').value;
    // getting message 
    var message = document.getElementById('message').value;
    
    // getting errorMsg 
    var error = document.getElementById('errorMsg');

    var success = document.getElementById('successMsg');
    
    if (fullname =="" && phoneNumber =="" && email =="" && message =="") {
        error.innerHTML ="Please Fill in All Required Fields";
        return false;
    }
    
    if (fullname =="") {
        error.innerHTML ="Your Name (required)";
        return false;
    }
    if (phoneNumber =="") {
        error.innerHTML ="Your Phone Number";
        return false;
    }
    if (email =="") {
        error.innerHTML ="Youre Email (required)";
        return false;
    }
    if (message =="") {
        error.innerHTML ="Your Message";
        return false;
    }
    
    
    else{
        success.innerHTML = "Congratulations All validations passed !!!";
    }
    
    }
    