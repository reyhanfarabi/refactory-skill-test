const auth = firebase.auth();

const whenSignIn = document.querySelector('#whenSignIn');
const whenSignOut = document.querySelector('#whenSignOut');

const googleSignIn = document.querySelector('#googleSignIn');
const facebookSignIn = document.querySelector('#facebookSignIn');
const signOutButton = document.querySelector('#signOutButton');

const userWelcome = document.querySelector('#userWelcome');

const provider = new firebase.auth.GoogleAuthProvider();

// Sign In with Google
googleSignIn.addEventListener('click', () => {
    auth.signInWithPopup(provider);
})

// Sign Out
signOutButton.addEventListener('click', () => {
    auth.signOut();
})