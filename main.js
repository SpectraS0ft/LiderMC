
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAykn6c4QxCf0Vu-Y6wW0xtNiZ3ahBRbOA",
  authDomain: "soft-football-team.firebaseapp.com",
  databaseURL: "https://soft-football-team-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "soft-football-team",
  storageBucket: "soft-football-team.appspot.com",
  messagingSenderId: "293353490941",
  appId: "1:293353490941:web:5f5d3dc4929752f34d7194",
  measurementId: "G-56BW7JFN00"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

document.getElementById("toggleMode").onclick = () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
};

const buttonSound = document.getElementById("buttonSound");
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => buttonSound.play());
});

const music = document.getElementById("bgMusic");
document.getElementById("toggleMusic").onclick = () => {
  if (music.paused) music.play();
  else music.pause();
};

const news = [
  { title: "Server updated to v1.20", date: "2025-06-04" },
  { title: "New skins supported!", date: "2025-06-01" }
];
const newsList = document.getElementById("newsList");
news.forEach(item => {
  const li = document.createElement("li");
  li.textContent = `${item.date}: ${item.title}`;
  newsList.appendChild(li);
});

document.getElementById("adminLogin").onclick = () => {
  const email = document.getElementById("adminEmail").value;
  const pass = document.getElementById("adminPass").value;
  if (email === "rnormurodov757@gmail.com") {
    alert("Admin logged in");
    document.getElementById("profilePanel").style.display = "block";
  } else {
    alert("Access Denied");
  }
};

document.getElementById("saveProfile").onclick = () => {
  const nick = document.getElementById("nickname").value;
  if (nick && !localStorage.getItem("nickname")) {
    localStorage.setItem("nickname", nick);
    localStorage.setItem("playtime", 0);
    set(ref(db, "users/" + nick), { playtime: 0 });
    alert("Profile saved");
  } else {
    alert("Nickname already used or empty");
  }
};

document.getElementById("downloadAPK").onclick = () => {
  window.open("https://mcpehub.org/engine/getfile.php?id=43537", "_blank");
};

document.getElementById("addServer").onclick = () => {
  window.open("https://add.aternos.org/LiderMC_UZ", "_blank");
};

document.getElementById("skinUploader").onchange = function(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById("skinPreview").src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};
