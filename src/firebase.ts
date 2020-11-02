import firebase from "firebase";


let config = {
    apiKey: "AIzaSyBDcoM7XiqvqbYd8JnCxq1EOuclfFqx1NM",
    authDomain: "react-pizza-765eb.firebaseapp.com",
    databaseURL: "https://react-pizza-765eb.firebaseio.com",
    projectId: "react-pizza-765eb",
    storageBucket: "react-pizza-765eb.appspot.com",
    messagingSenderId: "809954416511",
    appId: "1:809954416511:web:e8373b4fc89a06c4542c4a"
};


firebase.initializeApp(config);

export default firebase.database();
