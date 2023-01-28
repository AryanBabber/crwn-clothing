import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBDAVbbw_Nz_oQn0uUvC7hFqtNwROVtGC4",
	authDomain: "crwn-clothing-db-487d4.firebaseapp.com",
	projectId: "crwn-clothing-db-487d4",
	storageBucket: "crwn-clothing-db-487d4.appspot.com",
	messagingSenderId: "546895984921",
	appId: "1:546895984921:web:6d7e1ea6955cd943b96d88",
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
	prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (key, objects) => {
	const collectionRef = collection(db, key);
	const batch = writeBatch(db);

	objects.forEach((object) => {
		const docRef = doc(collectionRef, object.title.toLowerCase());
		batch.set(docRef, object);
	});

	await batch.commit();
	console.log("done");
};

export const getCategoriesAndDocuments = async () => {
	const collections = collection(db, 'categories')
	const queryCollection = query(collections)

	const querySnapshot = await getDocs(queryCollection)
	const categoryMap = querySnapshot.docs.reduce((acc, doc) => {
		const { title, items } = doc.data();
		acc[title.toLowerCase()] = items;
		return acc
	}, {})
	return categoryMap
}

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
	if (!userAuth) return;

	const userDocRef = doc(db, "users", userAuth.uid);

	const userSnapshot = await getDoc(userDocRef);

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...additionalInformation,
			});
		} catch (error) {
			console.log("error creating the user", error.message);
		}
	}

	return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;

	return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;

	return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback, errorCallback, completedCallback) => onAuthStateChanged(auth, callback, errorCallback, completedCallback);
