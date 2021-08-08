function addUser (){
    var UserName = document.getElementById("UserName").value;
    localStorage.setItem("UserName",UserName);
    window.location = "kwitter_room.html";
    }