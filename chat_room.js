// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCmL2vXd85t0G2UyihRoKdGDyc0vWjNjV4",
    authDomain: "chat-box-8d378.firebaseapp.com",
    databaseURL: "https://chat-box-8d378-default-rtdb.firebaseio.com",
    projectId: "chat-box-8d378",
    storageBucket: "chat-box-8d378.appspot.com",
    messagingSenderId: "263652707469",
    appId: "1:263652707469:web:00bc0dd8daa16e6effa6c4",
    measurementId: "G-YHM1ZW2JTH"
  };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
      user_name = localStorage.getItem("Username");
      document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";
  
      function adduser() {
             room_name = document.getElementById("user_name").value;
    
            localStorage.setItem("name",user_name);
        
            window.location = "chat_page.html";
  
            firebase.database().ref("/").child(user_name).update({
                  purpose: "Adding user name"
            });
      }
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       User_names = childKey;
      //Start code
  
      //End code
      });});}
  getData();
  