const submitBtn = document.getElementById("submit")
const errorMsg = document.querySelectorAll(".error-message")
const radioButtons = document.querySelectorAll('input[type="radio"]');
const checkButtons = document.getElementById('checkbox');
const radioErrorMsg = document.querySelectorAll(".radio-error")
const radioDivs = document.querySelectorAll(".radio-container")
const checkError = document.getElementById("check-error")
const successMsg = document.getElementById("success-container")
const radioIcon = document.querySelectorAll(".radio-icon")


function radioError() { 
    const isAnySelected = Array.from(radioButtons).some(radio => radio.checked);

    radioErrorMsg.forEach(msg => {
        if (!isAnySelected) {
            msg.classList.remove("hidden");
        } else {
            msg.classList.add("hidden");
        }
    });
}

radioButtons.forEach(radio => {
    radio.addEventListener('change', () => {
        radioDivs.forEach(div => div.style.backgroundColor = '');
        radioDivs.forEach(div => div.style.outline = 'none');

        const targetDiv = document.querySelector(`#${radio.dataset.targetDiv}`);
        if (targetDiv) {
            targetDiv.style.backgroundColor = "hsl(148, 38%, 91%)";
            targetDiv.style.outline = "2px solid hsl(169, 82%, 27%)";
        }
    })

    
})

function inputError() {
    errorMsg.forEach(msg => {
        const input = document.querySelector(`#${msg.dataset.inputId}`);
        if (input && input.value.trim() === "") {
            msg.classList.remove("hidden");
        }
        else {
            msg.classList.add("hidden")
        }
    });
}

function radioIconChecked() {

}

function showCheckError() {
    if (!checkButtons.checked) {
        checkError.classList.remove("hidden")
    }
    else {
        checkError.classList.add("hidden")
    }
}

function showSuccessMessage() {
    // Check if there are no visible error messages
    const hasErrors = document.querySelectorAll('.error-message:not(.hidden), .radio-error:not(.hidden), #check-error:not(.hidden)').length > 0;

    // Display success message if no errors exist
    if (!hasErrors) {
        successMsg.classList.remove("success-hide") // Example: success notification
    }
}



submitBtn.addEventListener('click', (event) => { event.preventDefault(); radioError(); inputError(); showCheckError(); showSuccessMessage()})
