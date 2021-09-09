const inputField = document.getElementById('input-field');
const error = document.getElementById('message');
const email = () => {
    const inputText = inputField;
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   const emailText = re.test(String(inputText.value).toLowerCase());
   if(inputText.value === ""){
        document.getElementById('message').style.display = "block"
        error.innerHTML = `<div class="alert alert-danger" role="alert">
        please not Empty!
        </div>`;
   }
   else if(emailText === true){
        document.getElementById('message').style.display = "block"
        error.innerHTML = `<div class="alert alert-success" role="alert">
        ${inputText.value} is Valid Email!`;
    }
    else{
       document.getElementById('message').style.display = "block"
       error.innerHTML = `<div class="alert alert-danger" role="alert">
       ${inputText.value} is Not Valid Email!`;
    }   
}