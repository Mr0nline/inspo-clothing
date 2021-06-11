import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyDqYZpI_kO_ks6vgFa-Sv8hf8gPg7DLLfs',
	authDomain: 'inspo-clothing-db.firebaseapp.com',
	projectId: 'inspo-clothing-db',
	storageBucket: 'inspo-clothing-db.appspot.com',
	messagingSenderId: '538770745181',
	appId: '1:538770745181:web:2e2bfb647b4b45e2302ab4',
	measurementId: 'G-9KG4Q9RC9V',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
