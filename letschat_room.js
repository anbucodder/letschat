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

    
    function addroom(){
      Room_name=document.getElementById("room_name").value;
      
      firebase.database().ref("/").child(Room_name).update({
            porpose : "adding room name"
      });
      localStorage.setItem("room_name",Room_name);
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name - "+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirecttoroompage(this.id) >'#'"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML=row
      //End code
      });});}
getData();

function redirecttoroompage(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="letschat_page.html";
}
