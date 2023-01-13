import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
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

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
	prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
	const userDocRef = doc(db, "users", userAuth.uid);
	console.log(userDocRef);

	const userSnapshot = await getDoc(userDocRef);
	
	if(!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt
			})
		} catch (error) {
			console.log("error creating the user. ", error.message)			
		}
	}

	return userDocRef
};

export const createAuthUserWithEmailAndPassword = async(email, password) => {
	if(!email || !password) return;
	
	createUserWithEmailAndPassword(auth, email, password)
}