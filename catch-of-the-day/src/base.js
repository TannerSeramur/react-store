import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC9m3AU4-ZPvVk9Po2oGDGz2I4Po88OsQM",
    authDomain: "react-order-db-tanner.firebaseapp.com",
    databaseURL: "https://react-order-db-tanner.firebaseio.com",
})

const base = Rebase.createClass(firebase.database());

export { firebaseApp };

export default base;