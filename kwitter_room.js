var firebaseConfig = {
      apiKey: "AIzaSyB9DzMNvWl1zmfJikuGlmLLkyFCV4Kgv8Q",
      authDomain: "kwiiter-a9c97.firebaseapp.com",
      databaseURL:"https://kwiiter-a9c97-default-rtdb.firebaseio.com/",
      projectId: "kwiiter-a9c97",
      storageBucket: "kwiiter-a9c97.appspot.com",
      messagingSenderId: "110972326260",
      appId: "1:110972326260:web:d55d6dc9a5fb97fb0b9c21"
    };
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//AÑADE TUS ENLACES DE FIREBASE
nombre_usuario=localStorage.getItem("user");
room_name=localStorage.getItem("room_name");
document.getElementById("user_name").innerHTML="hola" + nombre_usuario;
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código

      //Final del código
      });});}
getData();


function addRoom(){
obtener = document.getElementById("groom_name").value;
firebase.database().ref("/").child(obtener).update({
      purpose:"addingroomname"
})
localStorage.setItem("room_name",room_name);
}