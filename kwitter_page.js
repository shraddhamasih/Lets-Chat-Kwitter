//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAS-915wO1G-u3CeEjatUfVJw4JVjBpU1I",
      authDomain: "tic-tac-toe-22eb5.firebaseapp.com",
      databaseURL: "https://tic-tac-toe-22eb5.firebaseio.com",
      projectId: "tic-tac-toe-22eb5",
      storageBucket: "tic-tac-toe-22eb5.appspot.com",
      messagingSenderId: "953010451942",
      appId: "1:953010451942:web:84e9420e16026694a3d227"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
    function send()
    {
          msg = document.getElementById("msg").value
          firebase.database().ref(room_name).push({
                name1:user_name,
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
