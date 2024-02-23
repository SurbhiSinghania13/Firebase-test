//<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import {
    getDatabase,
    ref,
    child,
    get,
    onValue
  } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDvTMmJfrEnAmgYIkskWu8byqD_7BoIAEM",
    authDomain: "humber-406820.firebaseapp.com",
    projectId: "humber-406820",
    storageBucket: "humber-406820.appspot.com",
    messagingSenderId: "755319242193",
    appId: "1:755319242193:web:a9130851a2099a0d4574f0"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const database = getDatabase();
  const messages = ref(database, '/messages');

  onValue(
    messages,
    (snapshot) => {
    const ul = document.getElementById("messages");
    ul.replaceChildren();
    snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();

        console.log(childKey);
        console.log(childData);

        const text = document.createTextNode(childData.message);
        const li = document.createElement("li");

        li.appendChild(text);
        ul.appendChild(li);
    });

    // console.log(snapshot)
  }, 
  {
    onlyOnce: false,

  });
//</script>