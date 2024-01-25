
let signUp = document.querySelector('#signUp'); 

let logIn = document.querySelector('#logIn');
let logInChildren = logIn.children; //Alle Kindelemente von logIn

let loginformfield = document.querySelector('.loginformfield');
let loginformfieldChildren = loginformfield.children;

let title = document.querySelector('#signIn > h1'); 
let text = document.querySelector('#signIn > p'); 
let button = document.querySelector('#signIn > button'); 


function toggleScreen(target){
    // console.log(text);

    switch(true){
        case target == "SignIn":
            signUp.style.display = "none"; 
            logIn.style.flex = "50%";
            
            // Alle Kindelemente auf block setzen. 
            for (var i = 0; i < logInChildren.length; i++) {
                logInChildren[i].style.display = 'block';
            }

            for (var j = 0; j < loginformfieldChildren.length; j++) {
                loginformfieldChildren[j].style.display = 'block';
                loginformfieldChildren[j].style.width = "350px";
            }

            title.innerHTML = "Dont have an acccount?"; 
            text.innerHTML = "Let's get you all set up so you can start creating your first onboarding experience."; 
            button.innerHTML = "SignUp"; 
            break; 

        
        case target == "SignUp":
            signUp.style.display = ""; 
            logIn.style.flex = "0"; 
            
            // Alle Kindelemente auf block setzen. 
            for (var i = 0; i < logInChildren.length; i++) {
                logInChildren[i].style.display = 'none';
            }

            for (var j = 0; j < loginformfieldChildren.length; j++) {
                loginformfieldChildren[j].style.display = 'none';
                loginformfieldChildren[j].style.width = "0px";
            }

            title.innerHTML = "Alredy Signed up?"; 
            text.innerHTML = "Log in to your account so you can continue building and editing your onboarding flows."; 
            button.innerHTML = "SignIn"; 
            break; 
            break;
        } 
}