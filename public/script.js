

const socket = io();

let userName;
function login(event) {
    event.preventDefault();
    userName = document.getElementById("user-name").value;
    document.getElementById("login-container").style.display = "none";
    document.querySelector("main").style.display = "flex";
    document.getElementById("sent-button").addEventListener("click", sentMessage);
    document.getElementById("message-container").innerHTML = '';
}
function sentMessage(event) {
    event.preventDefault();
    const messagedata = document.getElementById("message").value;
    if (message != "") {
        const data = {
            username: userName,
            message: messagedata,
        }

        console.log(data);
        socket.emit('message', data);

        addMsgToUi(data, "sent");
    }

}

// recieving data from socket

socket.on("message", (data) => {

    if (userName != data.username) {
        addMsgToUi(data, "recieved")
    }
})

function addMsgToUi(data, status) {
    document.getElementById("message").value = "";
    const sendingMessage = document.createElement("span");
    sendingMessage.className = status == "sent" ? "message sent" : "message";

    sendingMessage.innerHTML = data.username + ":      " + data.message;
    document.getElementById("message-container").appendChild(sendingMessage);
}

console.log(document.getElementById("form-btn"));


document.getElementById("form-btn").addEventListener("click", login);
