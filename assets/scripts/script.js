/* constants and variables */

const emailNextBtn = document.querySelector('.email-next-btn');
const previousBtn = document.querySelector('#btn.previous');
const passwordNextBtn = document.querySelector('#btn.password-next');
let emailStep = document.querySelector('.stepper .step.email');
let passwordStep = document.querySelector('.stepper .step.password');
let validateStep = document.querySelector('.stepper .step.validate');
let emailForm = document.querySelector('.form-email');
let passwordForm = document.querySelector('.form-password');
let spanOne = document.querySelector('.stepper span.step1');
let spanTwo = document.querySelector('.stepper span.step2');
let spanThree = document.querySelector('.stepper span.step3');
const submission = document.querySelector('.submission');
const validation = document.querySelector('.validation');
let validationMessage = document.querySelector('.validation h3');
const successMessage = 'Your form has been submitted successfully!';
const submissionPeviousBtn = document.querySelector('.submission #btn.previous');
const submitBtn = document.querySelector('.submission #btn.submit');


let sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

addEventListener('load', function(e) {
    document.querySelector('#title').innerHTML = 'Linear Stepper';
});

const stepTwoStyle = () => {
    emailForm.style.display = 'none';
    passwordForm.style.display = 'flex';
    emailStep.style.background = '#fff';
    passwordStep.style.background = '#ccc';
    spanOne.style.background = '#ccc';
    spanTwo.style.background = ' #1E90FF';
}

const stepOneStyle = () => {
    emailForm.style.display = 'flex';
    passwordForm.style.display = 'none';
    emailStep.style.background = '#ccc';
    passwordStep.style.background = '#fff';
    spanOne.style.background = '#1E90FF';
    spanTwo.style.background = '#CCC';
}

const stepThreeStyle = () => {
    passwordForm.style.display = 'none';
    submission.style.display = 'block';
    passwordStep.style.background = '#fff';
    validateStep.style.background = '#ccc';
    spanThree.style.background = '#1E90FF';
    spanTwo.style.background = '#CCC';
}

/* Event Listeners */

emailNextBtn.addEventListener('click', () => {
    stepTwoStyle();
});
  
previousBtn.addEventListener('click', () => {
    stepOneStyle();  
});

passwordNextBtn.addEventListener('click', () => {
    stepThreeStyle();
});

submissionPeviousBtn.addEventListener('click', () => {
    submission.style.display = 'none';
    passwordForm.style.display = 'flex';
    validateStep.style.background = '#fff';
    spanThree.style.background = '#CCC';
    passwordStep.style.background = '#CCC';
    spanTwo.style.background = '#1E90FF';
});

submitBtn.addEventListener('click', async () => {
    submission.style.display = 'none';
    validateStep.style.background = '#fff';
    spanThree.style.background = '#ccc';
    
    validationMessage.textContent = successMessage + ' :)';

    await sleep(5000);
    location.reload();
});