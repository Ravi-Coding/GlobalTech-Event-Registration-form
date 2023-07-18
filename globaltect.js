document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var college = document.getElementById("college-name").value;
    var gender = document.getElementById("gender").value;
    var email = document.getElementById("e-mail").value;
    var phone = document.getElementById("phone-no").value;
    var course = document.getElementById("current-course").value;
    alert("Registration Succesfull");

});