// firebase auth
const auth = firebase.auth();

// store element to display when user is sign in or sign out
const whenSignIn = document.querySelector('#whenSignIn');
const whenSignOut = document.querySelector('#whenSignOut');

// store button element
const googleButton = document.querySelector('#googleSignIn');
const facebookButton = document.querySelector('#facebookSignIn');
const regularButton = document.querySelector('#regularSignIn');
const signOutButton = document.querySelector('#signOutButton');

const userWelcome = document.querySelector('#userWelcome');

// sign in with google
const googleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(googleProvider);
}
googleButton.addEventListener('click', googleSignIn);


// sign in with facebook
const facebookSignIn = () => {
    const facebookProvider = new firebase.auth.FacebookAuthProvider();
    auth.signInWithPopup(facebookProvider);
}
facebookButton.addEventListener('click', facebookSignIn);


// sign in with email/password
const regularSignIn = () => {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    auth.signInWithEmailAndPassword(email, password)
        // .then((userCredential) => {
        //     // Signed in
        //     var user = userCredential.user;
        //     // ...
        // })
        // .catch((error) => {
        //     var errorCode = error.code;
        //     var errorMessage = error.message;
        // });
}
regularButton.addEventListener('click', regularSignIn)


// sign out
signOutButton.addEventListener('click', () => {
    auth.signOut();
})

// change ui state
auth.onAuthStateChanged(user => {

    console.log(user);
    console.dir(user);
    if (user) {
        // when sign in
        whenSignIn.hidden = false;
        whenSignOut.hidden = true;
        if (userWelcome.displayName == null) {
            userWelcome.innerHTML = 
                `<h1>Hi, ${user.email}</h1>`;
        } else {
            userWelcome.innerHTML = 
                `<h1>Hi, ${user.displayName}</h1>`;
        }
        
    } else {
        // when sign out
        whenSignIn.hidden = true;
        whenSignOut.hidden = false;
        userWelcome.innerHTML = '';
    }
});