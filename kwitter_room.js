var firebaseConfig = {
      apiKey: "AIzaSyCwazuspz05FW0muKQo-b7C2JsogMIAw-Y",
      authDomain: "twitter-but-kwitter.firebaseapp.com",
      databaseURL: "https://twitter-but-kwitter-default-rtdb.firebaseio.com",
      projectId: "twitter-but-kwitter",
      storageBucket: "twitter-but-kwitter.appspot.com",
      messagingSenderId: "375803234475",
      appId: "1:375803234475:web:c00d92d85185d5d2b08fee"
    };
   
      firebase.initializeApp(firebaseConfig);
    
    user_name = localStorage.getItem("user_name");
    
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
    
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });
    
        localStorage.setItem("room_name", room_name);
        
    }
    
    function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
           
        });
      });
    
    }
    
    getData();
    
    function redirectToRoomName(name)
    {
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
    }
    