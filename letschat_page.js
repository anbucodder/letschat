// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBGkmixIfqY0J8bITgcr0YoBITC2rg_26k",
      authDomain: "letschat-3d870.firebaseapp.com",
      databaseURL: "https://letschat-3d870-default-rtdb.firebaseio.com",
      projectId: "letschat-3d870",
      storageBucket: "letschat-3d870.appspot.com",
      messagingSenderId: "1046579863316",
      appId: "1:1046579863316:web:cb578a8ff58314d16a6c01"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("username");
    room_name=localStorage.getItem("room_name");

      function send(){
            msg=document.getElementById("msg").value;
            firebase.database().ref(room_name).push({
                  name : user_name,
                  message : msg,
                  like : 0
            });
            document.getElementById("msg").value="";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}



