
let signUp = document.querySelector('#signUp'); 
let background = document.querySelector('.backgroundanimation');

let logIn = document.querySelector('#logIn');
let logInChildren = logIn.children; //Alle Kindelemente von logIn

let loginformfield = document.querySelector('.loginformfield');
let loginformfieldChildren = loginformfield.children;

let title = document.querySelector('#signIn > h1'); 
let text = document.querySelector('#signIn > p'); 
let button = document.querySelector('#signIn > button'); 


let form = document.querySelector('.signupformfield');
// let form = document.querySelector('.form');
let mail = document.querySelector('#email');
let passwort = document.querySelector('#spasssword'); 
let error = document.querySelector('#error'); 
let submit = document.querySelector('#submit'); 

form.addEventListener('submit', e => { 

    e.preventDefault();
    console.log('Test');
    validateInputs(e)});
    

const setError = (message) => {
    error.innerText = message; 
}


const validateInputs = () => {
    const passwortValue = passwort.value.trim(); 

    if(passwortValue === '') {
        setError('Ey Jung, schreib ein Passwort ins Feld');
    }
}



function toggleScreen(target){
    // console.log(text);

    switch(true){
        case target == "SignIn":
            signUp.style.display = "none"; 
            logIn.style.flex = "60%";
            logIn.style.visibility= "visible";
            background.style.animation = "ani_signin 0.7s forwards";
            
            // loginformfield.style.display = 'block';
            // Alle Kindelemente auf block setzen. 
            for (var i = 0; i < logInChildren.length; i++) {
                logInChildren[i].style.display = 'block';
                logInChildren[i].style.width = '350px';
            }

            //Weil das letzte Element aus logInChildren block wäre und die paddings ineinader gehen. (8 statt 16px)
            loginformfield.style.display = 'grid';

            for (var j = 0; j < loginformfieldChildren.length; j++) {
                loginformfieldChildren[j].style.display = 'block';
                loginformfieldChildren[j].style.width = "auto";
            }

            title.innerHTML = "Dont have an acccount?"; 
            text.innerHTML = "Let's get you all set up so you can start creating your first onboarding experience."; 
            button.innerHTML = "SignUp"; 
            break; 


        case target == "SignUp":
            signUp.style.display = ""; 
            logIn.style.flex = "0"; 
            background.style.animation = "ani_signup 0.7s forwards";

            
            // Alle Kindelemente auf block setzen. 
            for (var i = 0; i < logInChildren.length; i++) {
                logInChildren[i].style.display = 'none';
            }

            for (var j = 0; j < loginformfieldChildren.length; j++) {
                loginformfieldChildren[j].style.display = 'none';
                loginformfieldChildren[j].style.width = "0px";
            }

            title.innerHTML = "Already signed up?"; 
            text.innerHTML = "Log in to your account so you can continue building and editing your onboarding flows."; 
            button.innerHTML = "SignIn"; 
            break; 
        } 
}

