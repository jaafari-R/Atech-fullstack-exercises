// TODO
const sendMsg = () => {
    const msgBox = document.getElementById("msg-box");
    const chatBox = document.getElementById("chatbox")
    const msg = msgBox.value;

    if(!msg)
        return;
    
    const newMsg = document.createElement("div");
    const textP = "<p>" + msg + "</p>";
    const timeP = "<p>" + "10:00" + "</p>";
    newMsg.setAttribute("class", "text-container left");
    newMsg.innerHTML = text + time;

    chatBox.appendChild(newMsg);
}