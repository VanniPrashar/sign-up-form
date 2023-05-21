const name1 = document.getElementById('name');

name1.addEventListener('keyup' , function (){
  const regex = /^[A-Za-z]+$/
  console.log(name1.value)
  console.log(regex.test(name1.value))
})

const age1 = document.getElementById('age');

age1.addEventListener('keyup' , function() {
  const regex = /^\S[0-9]{0,3}$/
  console.log(age1.value)
  console.log(regex.test(age1.value))

})

const city1 = document.getElementById('city');

city1.addEventListener('keyup' , function() {
  const regex = /^[A-Za-z]+$/
  console.log(city1.value)
  console.log(regex.test(city1.value))})

  const phone1 = document.getElementById('phone');
  phone1.addEventListener('keyup' , function() {
  const regex = /^([+]\d{2})?\d{10}$/
  console.log(phone1.value)
  console.log(regex.test(phone1.value))})

  const email1 = document.getElementById('email');
  email1.addEventListener('keyup' , function() {
  const regex = /^[A-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Z0-9.-]+$/
  console.log(email1.value)
  console.log(regex.test(email1.value))})


  const password1 = document.getElementById('password');
  password1.addEventListener('keyup' , function() {
  const regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
  console.log(password1.value)
  console.log(regex.test(password1.value))})

  function verifyPassword() {  
    var pw = document.getElementById("password").value;    
    if(pw == "") {  
       document.getElementById("message").index.html = "**Fill the password please!";  
       return false;  
    }  
       
    if(pw.length < 8) {  
       document.getElementById("message").innerHTML = "**Password length must be atleast 8 characters";  
       return false;  
    }  
    
    if(pw.length > 15) {  
       document.getElementById("message").innerHTML = "**Password length must not exceed 15 characters";  
       return false;  
    } else {  
       alert("Password is correct");  
    }  
  }  
  