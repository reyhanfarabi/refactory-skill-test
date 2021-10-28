// firebase auth
const auth = firebase.auth();

// store element to display when user is sign in or sign out
const whenSignIn = document.querySelector('#whenSignIn');
const whenSignOut = document.querySelector('#whenSignOut');

// store button element
const regularButton = document.querySelector('#regularSubmit');
const googleButton = document.querySelector('#googleSignIn');
const facebookButton = document.querySelector('#facebookSignIn');
const signOutButton = document.querySelector('#signOutButton');

// store user landing element
const userWelcome = document.querySelector('#userWelcome');




// declaring element for login mode change
const forgotPassButton = document.querySelector('#forgot-password');
const formHeader = document.querySelector('.form-header');
const modeLabel = document.querySelector('#modeLabel');
const modeButton = document.querySelector('#modeButton');

let haveAccount = true;




//
// APP AUTHENTICATION
//

// sign in with google
const googleSignIn = () => {
    toggleRequired(false);
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(googleProvider);
}
googleButton.addEventListener('click', googleSignIn);


// sign in with facebook
const facebookSignIn = () => {
    toggleRequired(false);
    const facebookProvider = new firebase.auth.FacebookAuthProvider();
    auth.signInWithPopup(facebookProvider);
}
facebookButton.addEventListener('click', facebookSignIn);


// sign in with email/password
const regularSignIn = () => {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    auth.signInWithEmailAndPassword(email, password);
}

// sign up with email/password
const signUp = () => {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    auth.createUserWithEmailAndPassword(email, password);
}

// submit button for sign in or sign up
regularButton.addEventListener('click', () => {
    if (haveAccount === true) {
        return regularSignIn();
    } else if (haveAccount === false) {
        return signUp();
    }
})


// sign out
signOutButton.addEventListener('click', () => {
    auth.signOut();
    document.querySelector('#email').value = '';
    document.querySelector('#password').value = '';
    toggleRequired(true);
})


// toggle input require
function toggleRequired(bool) {
    document.querySelector('#email').required = bool;
    document.querySelector('#password').required = bool;
}


// change ui state
auth.onAuthStateChanged(user => {
    if (user) {
        // when sign in
        whenSignIn.hidden = false;
        whenSignOut.hidden = true;
        if (user.photoURL !== null) {
            userWelcome.innerHTML = 
                `<img src="${user.photoURL}">` +
                `<h1>Hi, ${user.email}</h1>` +
                `<h2>User ID : ${user.providerData[0].uid}</h2>`;
            console.log(user.photoURL);
            console.log(user.email);
            console.log(user.providerData[0].uid);
        } else {
            userWelcome.innerHTML = 
                `<h1>Hi, ${user.email}</h1>` +
                `<h2>User ID : ${user.providerData[0].uid}</h2>`;
            console.log(user.email);
            console.log(user.providerData[0].uid);
        }
        
    } else {
        // when sign out
        whenSignIn.hidden = true;
        whenSignOut.hidden = false;
        userWelcome.innerHTML = '';
    }
});




//
// SIGN IN OR SIGN UP
//

// change mode between sign in or sign up
modeButton.addEventListener('click', () => {
    if (haveAccount === true) {
        haveAccount = false;
        toSignUp();
    } else if (haveAccount === false){
        haveAccount = true;
        toSignIn();
    }

})

function toSignUp() {
    formHeader.innerHTML = 'Create new account';
    modeLabel.innerHTML = 'Already have an account?';
    modeButton.innerHTML = 'Sign In';
    regularButton.innerHTML = 'Sign Up';
    forgotPassButton.hidden = true;
}

function toSignIn() {
    formHeader.innerHTML = 'Sign in to your account';
    modeLabel.innerHTML = "Don't have an account?";
    modeButton.innerHTML = 'Sign Up';
    regularButton.innerHTML = 'Sign In';
    forgotPassButton.hidden = false;
}




//
// FORGOT PASSWORD
//

function sendEmail() {
    const email = prompt('Enter your email addres to send reset link');
    auth.sendPasswordResetEmail(email)
        .then(() => {
            alert('Password Reset Email Sent');
        })
        .catch((error) => {
            console.error(error);
            alert('Error sending email, make sure the email is correct')
        })
}

forgotPassButton.addEventListener('click', () => {
    sendEmail()
})