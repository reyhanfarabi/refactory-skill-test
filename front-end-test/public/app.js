// firebase auth
const auth = firebase.auth();

// store element to display when user is sign in or sign out
const whenSignIn = document.querySelector('#whenSignIn');
const whenSignOut = document.querySelector('#whenSignOut');

// store button element
const googleButton = document.querySelector('#googleSignIn');
const facebookButton = document.querySelector('#facebookSignIn');
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


// sign out
signOutButton.addEventListener('click', () => {
    auth.signOut();
})




// change ui state
auth.onAuthStateChanged(user => {

    console.log(user);
    if (user) {
        // when sign in
        whenSignIn.hidden = false;
        whenSignOut.hidden = true;
        userWelcome.textContent = `Hello, ${user.displayName}`;
    } else {
        // when sign out
        whenSignIn.hidden = true;
        whenSignOut.hidden = false;
        userWelcome.textContent = ``;
    }
});