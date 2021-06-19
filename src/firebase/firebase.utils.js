import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const config = {
	apiKey: 'AIzaSyDqYZpI_kO_ks6vgFa-Sv8hf8gPg7DLLfs',
	authDomain: 'inspo-clothing-db.firebaseapp.com',
	projectId: 'inspo-clothing-db',
	storageBucket: 'inspo-clothing-db.appspot.com',
	messagingSenderId: '538770745181',
	appId: '1:538770745181:web:2e2bfb647b4b45e2302ab4',
	measurementId: 'G-9KG4Q9RC9V',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;
	const userRef = await firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdTime = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				createdTime,
				...additionalData,
			});
		} catch (error) {
			toast.error(error.message, { autoClose: 5000 });
			// console.log('Error in creation! ', error.message);
		}
	}

	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = async () => {
	try {
		await auth.signInWithPopup(provider);
		toast.success("You've logged in via Google!", { autoClose: 5000 });
	} catch (error) {
		toast.error(error.message, { autoClose: 5000 });
	}
};

export default firebase;
