
//ADD YOUR FIREBASE LINKS HERE
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
    function addRoom()
    {
          Room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(Room_name).update({
          purpose : "adding room name"  
      });

      localStorage.setItem("room_name", Room_name);
      window.location = "kwitter_page.html";

    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -"+ Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout()
{
     localStorage.removeItem("user_name");
     localStorage.removeItem("room_name");
     window.location = "index.html";
}