function adduser(){
    user_name=document.getElementById("username").value;
    localStorage.setItem("username",user_name);
    window.location="letschat_room.html";
}