var firebaseConfig = {
      apiKey: "AIzaSyA7-__omgL_nr69NcsK-bLBCFmUj9sK7is",
      authDomain: "kwitterapp-58308.firebaseapp.com",
      databaseURL: "https://kwitterapp-58308-default-rtdb.firebaseio.com",
      projectId: "kwitterapp-58308",
      storageBucket: "kwitterapp-58308.appspot.com",
      messagingSenderId: "698059041507",
      appId: "1:698059041507:web:6805f70b8fc363de5873d6"
    };

     firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      //Start code
            console.log("Room Name - " + Room_names);
            row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'> #" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom() {

      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding a room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name) {

      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";

}


