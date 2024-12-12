const messagesContainer = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');

const messages = [
    { text: "Hello! I'm Oakbot. How can I assist you today?", isBot: true }
];

function displayMessages() {
    messagesContainer.innerHTML = '';
    messages.forEach((msg) => {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${msg.isBot ? 'bot' : 'user'}`;

        if (msg.isBot) {
            const avatar = document.createElement('img');
            avatar.src = "https://example.com/oakbot-avatar.png";
            avatar.alt = "Bot Avatar";
            avatar.className = "message-avatar";
            messageDiv.appendChild(avatar);
        }

        const bubble = document.createElement('div');
        bubble.className = 'message-bubble';
        bubble.textContent = msg.text;
        messageDiv.appendChild(bubble);

        messagesContainer.appendChild(messageDiv);
    });
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function sendMessage() {
    const userMessage = userInput.value.trim();
    if (!userMessage) return;

    messages.push({ text: userMessage, isBot: false });
    userInput.value = '';
    displayMessages();

    setTimeout(() => {
        messages.push({
            text: "This is a sample response. Feel free to ask more!",
            isBot: true
        });
        displayMessages();
    }, 1000);
}

displayMessages();
