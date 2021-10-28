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
}
regularButton.addEventListener('click', regularSignIn)


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
        if (user.photoURL !== null) {
            userWelcome.innerHTML = 
                `<img src="${user.photoURL}">` +
                `<h1>Hi, ${user.email}</h1>` +
                `<h2>User ID : ${user.providerData[0].uid}</h2>`;
        } else {
            userWelcome.innerHTML = 
                `<h1>Hi, ${user.email}</h1>` +
                `<h2>User ID : ${user.providerData[0].uid}</h2>`;
        }
        
    } else {
        // when sign out
        whenSignIn.hidden = true;
        whenSignOut.hidden = false;
        userWelcome.innerHTML = '';
    }
});