
function login(event) {
    event.preventDefault();
    document.getElementById("login-container").style.display = "none";
    document.querySelector("main").style.display = "flex";
    document.getElementById("sent-button").addEventListener("click", sentMessage);
    document.getElementById("message-container").innerHTML = '';
}
function sentMessage(event) {
    event.preventDefault();
    const message = document.getElementById("message").value;
    if (message != "") {
        document.getElementById("message").value = "";
        const sendingMessage = document.createElement("span");
        sendingMessage.className = "message sent";
        sendingMessage.innerHTML = message;
        document.getElementById("message-container").appendChild(sendingMessage);
    }

}

console.log(document.getElementById("form-btn"));


document.getElementById("form-btn").addEventListener("click", login);
