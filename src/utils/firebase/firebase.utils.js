import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBDAVbbw_Nz_oQn0uUvC7hFqtNwROVtGC4",
	authDomain: "crwn-clothing-db-487d4.firebaseapp.com",
	projectId: "crwn-clothing-db-487d4",
	storageBucket: "crwn-clothing-db-487d4.appspot.com",
	messagingSenderId: "546895984921",
	appId: "1:546895984921:web:6d7e1ea6955cd943b96d88",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
	prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)
    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef)
    console.log(userSnapshot.data())
    console.log(userSnapshot.exists())
    console.log(userSnapshot.get())

} 