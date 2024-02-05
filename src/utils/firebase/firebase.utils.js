// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth'

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBlfbAGrTqMW9gBjcoNJYZUlNeuMigzmPg",
    authDomain: "clothing-app-3979b.firebaseapp.com",
    projectId: "clothing-app-3979b",
    storageBucket: "clothing-app-3979b.appspot.com",
    messagingSenderId: "313663822625",
    appId: "1:313663822625:web:0761e890e6362200dabc60"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup( auth, provider );

export const db = getFirestore()

export const createUserDocumentFromAuth = async(userAuth) => {
    const userDocRef = doc(db, 'user', userAuth.uid )
    console.log(userDocRef)
    const userSnapshot = await getDoc(userDocRef)
    console.log(userSnapshot)

    if(!userSnapshot.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date()
        try {
            await setDoc(userDocRef, {
              displayName,
              email,
              createdAt,
            });
          } catch (error) {
            console.log('error creating the user', error.message);
          }
    }

    return userDocRef
}