
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
    document.getElementById("user_name").innerHTML="welcome to our website "+user_name;
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      //End code
      });});}
getData();


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
