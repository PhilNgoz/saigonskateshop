// Get the input field
// Execute a function when the user releases a key on the keyboard
var success = document.getElementById('auth-form-wrap-checkout')
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


const scriptURL = 'https://script.google.com/macros/s/AKfycbxT4x8ZyV0l5QTtf3guRcVN4O4iBVVu-CoDk4RTPSCZbxgJ35ZS1djQ2uy8Q2iyYyh0zw/exec';


form?.addEventListener('submit', e => {
    e.preventDefault();
   
    showLoadingIndicator();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => showSuccessMessage(response))
        .catch(error => showErrorMessage(error));
})

function showLoadingIndicator() {
}

// function showSuccessMessage(response) {
//     alert("Thuc hien thanh cong");
//     console.log('Success!', response);
//     setTimeout(() => {
//     }, 1000);
// }
function showSuccessMessage(response) {
    success.style.display = 'block'
   
}

function showErrorMessage(error) {
    console.error('Error!', error.message);
    setTimeout(() => {
    }, 1000);
}
