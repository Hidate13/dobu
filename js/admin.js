//validate the input of name member registration
var nameInput = document.getElementById("name");

nameInput.addEventListener("input", function(event) {
  var inputValue = event.target.value;

  // Remove numbers and special characters using regex
  var pattern = inputValue.replace(/[^A-Za-z ]/g, "");

  // Update the input field value with the sanitized value
  event.target.value = pattern;
});


// this is for validate email member registration
var emailInput = document.getElementById("email");

emailInput.addEventListener("input", function(event) {
  var email = event.target.value;
  var pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!pattern.test(email)) {
    event.target.setCustomValidity("Please enter a valid email address. example : Example@Sample.com");
  } else {
    event.target.setCustomValidity("");
  }
});

//this is for validate passoword member registration
var passwordInput = document.getElementById("pwd");

passwordInput.addEventListener("input", function(event) {
  var password = event.target.value;

  // Validate password length
  if (password.length < 8) {
    event.target.setCustomValidity("Password must be at least 8 characters long.");
  } else {
    event.target.setCustomValidity("");
  }

  // Validate password strength using regex
  var passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  if (!passwordPattern.test(password)) {
    event.target.setCustomValidity("Password must contain at least one digit, one lowercase letter, and one uppercase letter.");
  } else {
    event.target.setCustomValidity("");
  }
});



  // Function to handle form submission Member registration

 var users = localStorage.getItem("users"); 

$(function () {

    });
  function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the form input values
    var userId = GetUserID();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('pwd').value;
    var date = document.getElementById('datepicker').value;
    var classOption = document.getElementById('class-option').value;
    var memberOption = document.getElementById('member-option').value;
    var coursesOption = document.getElementById('courses-option').value;

    // Create an object to store the form data
    var formData = {
      "id": userId,
      "name": name,
      "email": email,
      "password": password,
      "date" : date,
      "classOption" : classOption,
      "memberOption": memberOption,
      "coursesOption": coursesOption
    };
    addUserDataToLocalStorage(formData);
    document.getElementById('name').value='';
    document.getElementById('email').value='';

    // Store the form data in local storage
    // localStorage.setItem('formData', JSON.stringify(formData));

  // Redirect to the thank you page
  window.location.href = '/html/thankyou.html';
  }

  // Add event listener to the form submit button
  var form = document.querySelector('.form-register');
  form.addEventListener('submit', handleFormSubmit);

  

  function GetUserID() {
    const ID = Date.now();
    return ID;
}

function addUserDataToLocalStorage(formData) {

    //already has data in localstorage then update it other create new one

    var users = JSON.parse(localStorage.getItem('userData'));
    if (users != null) {
        users.push(formData);
       
        localStorage.setItem('userData', JSON.stringify(users));
    }
    else {
        var userData = new Array();
        userData.push(formData);
        localStorage.setItem('userData', JSON.stringify(userData));

    }
}

