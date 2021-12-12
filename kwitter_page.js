var firebaseConfig = {
      apiKey: "AIzaSyCwazuspz05FW0muKQo-b7C2JsogMIAw-Y",
      authDomain: "twitter-but-kwitter.firebaseapp.com",
      databaseURL: "https://twitter-but-kwitter-default-rtdb.firebaseio.com",
      projectId: "twitter-but-kwitter",
      storageBucket: "twitter-but-kwitter.appspot.com",
      messagingSenderId: "375803234475",
      appId: "1:375803234475:web:a7f0c40f2d5cfca9b08fee"
    };
    
    
      firebase.initializeApp(firebaseConfig);
          user_name = localStorage.getItem("user_name");
          room_name = localStorage.getItem("room_name");
    
    function send()
    {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
       });
    
      document.getElementById("msg").value = "";
    }
    
    function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
             firebase_message_id = childKey;
             message_data = childData;
    //Start code
             
    //End code
          } });  }); }
    getData();
    
    function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
    }
    