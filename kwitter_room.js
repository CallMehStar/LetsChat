// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCwazuspz05FW0muKQo-b7C2JsogMIAw-Y",
      authDomain: "twitter-but-kwitter.firebaseapp.com",
      projectId: "twitter-but-kwitter",
      storageBucket: "twitter-but-kwitter.appspot.com",
      messagingSenderId: "375803234475",
      appId: "1:375803234475:web:a7f0c40f2d5cfca9b08fee"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
 