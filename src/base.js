import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyAK1khYDYy2IcF_q8_Pj-VWyHTBzNn6Bh8",
    authDomain: "react-sneaker-store.firebaseapp.com",
    databaseURL: "https://react-sneaker-store.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());
//Named Export
export { firebaseApp };
//Default Export  Allowing us to bring it in to other files
export default base;