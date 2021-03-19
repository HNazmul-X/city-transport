import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "./firebase.config";

//login frame work initialize
export const loginFrameworkInit = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
};

// handle google sign in
export const signInWithGogle = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return loginProgress(googleProvider);
};

// handle login with facebook
export const signInwithFacebook = () => {
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    return loginProgress(fbProvider);
};

// login progress
const loginProgress = (provider) => {
    return firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
            return returnUserResult(result);
        })
        .catch((error) => {
            return error;
        });
};

/// create accout with email and password
export const createAccoutWithPassword = (email, password,name) => {
    return firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((result) => {
            updateUser(name)
            debugger
            return returnUserResult(result);
        })
        .catch((error) => {
            return error;
        });
};

// login with password and email
export const loginWithPassword = (email, password) => {
    return firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((result) => {
            return returnUserResult(result);
        })
        .catch((error) => {
            return error;
        });
};




// handle sign out
export const signOut = () => {
    return firebase
        .auth()
        .signOut()
        .then(() => {
            const signedInUser = {
                isLogined: false,
                displayName: "",
                email: "",
                photoURL: "",
                succes: true,
                error: "",
            };
            return signedInUser;
        })
        .catch((error) => {
        });
};

// return result and will distructrue data from promise result
const returnUserResult = (result) => {
    const { displayName, email, photoURL } = result.user;
    const signedInUser = {
        isLogined: true,
        displayName: displayName,
        email: email,
        photoURL: photoURL,
        succes: true,
        error: "",
    };
    return signedInUser;
};

// update user 
const updateUser = (name) => {
    const user = firebase.auth().currentUser;
    user.updateProfile({
        displayName: name,
    }).then(
        console.log("user Created success fylly")
    )
}

// retrunt error retult 
const returnErrorResult = (error)=> {

}
