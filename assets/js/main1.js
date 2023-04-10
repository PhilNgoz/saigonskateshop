// submit
// Get the input field
// Execute a function when the user releases a key on the keyboard
var helpform = document.getElementById('help-form-wrap')
var helpForm = document.getElementById('help-form-control')
var closeHelpform = document.querySelector('.help-close-button')
var helpSuccess = document.getElementById('help-success')
const form = document.forms['submit-to-google-sheet'];
form?.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        form.submit();
    }
});

function stepSetSinhVien() {
   
    doLoading()
        .then(doSetSinhVien)
        .then(doComplete);
}

function doLoading() {
    return new Promise(function(resolve, reject) {
        resolve();
    });
}

function doSetSinhVien() {
    return new Promise(function(resolve, reject) {
        resolve();
    });
}

function doComplete() {
    return new Promise(function(resolve, reject) {
        resolve();
    });
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbysagFH_aK6VlsNAiRKhyRkIiS6s4ougMjM9uRcVRV-rHN8EV5e6IiOjMHoDGmH8G5bQg/exec';


form?.addEventListener('submit', e => {
    e.preventDefault();
   
    showLoadingIndicator();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => showSuccessMessage(response))
        .catch(error => showErrorMessage(error));
})

function showLoadingIndicator() {
}


function showSuccessMessage(response) {
    helpForm.style.animation = 'burnOut 5s'
    setTimeout(() =>{
        helpForm.style.display = "none"
    },500)
   
   helpSuccess.style.display = "block"
   
}

function showErrorMessage(error) {
    console.error('Error!', error.message);
    setTimeout(() => {
    }, 1000);
}
closeHelpform.onclick = function(){
    helpform.style.animation = 'burnOut 2s '
    setTimeout(() => {
        helpform.style.display ="none"
    }, 200);
    
   
}