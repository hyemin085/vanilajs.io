const nicknameForm = document.querySelector("#nickname-form");
const nicknameInput = document.querySelector("#nickname-form input");
const addNickname = document.querySelector("#welcome");




function onNicknameSubmit(event) {
  event.preventDefault();
 // console.log(nicknameInput.value);
  nicknameForm.classList.add("hidden");
 const nickname = nicknameInput.value;
 localStorage.setItem("nickname", nickname);
 // // nicknameInput.value = "";
 document.querySelector("#todo-form input").style.display="block";

  addNicknames(nickname);
}

function addNicknames(nickname) {
  addNickname.innerText=`어서와요 ${nickname}❤`;
  addNickname.classList.remove("hidden");
}

const saveNickname = localStorage.getItem("nickname");

if(saveNickname === null) {
  nicknameForm.classList.remove("hidden");
  document.querySelector("#todo-form input").style.display="none";
  nicknameForm.addEventListener("submit", onNicknameSubmit);
} else {
  addNicknames(saveNickname);
}

