 // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwazuspz05FW0muKQo-b7C2JsogMIAw-Y",
  authDomain: "twitter-but-kwitter.firebaseapp.com",
  databaseURL: "https://twitter-but-kwitter-default-rtdb.firebaseio.com",
  projectId: "twitter-but-kwitter",
  storageBucket: "twitter-but-kwitter.appspot.com",
  messagingSenderId: "375803234475",
  appId: "1:375803234475:web:a7f0c40f2d5cfca9b08fee"
};    

// Initialize Firebases
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";


function addUser() {
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}

function addRoom () {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
  console.log("Room name - " + Room_names);
  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
  document.getElementById("output").innerHTML += row;
  //End code
  });});}
getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
    window.location = "index.html";
}