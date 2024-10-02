document.getElementById('send-button').onclick = function() {
    const userInput = document.getElementById('user-input').value;
    const chatBox = document.getElementById('chat-box');

    // Display user message
    const userMessage = document.createElement('div');
    userMessage.className = 'chat-message user-message';
    userMessage.textContent = `You: ${userInput}`;
    chatBox.appendChild(userMessage);

    // Send query to the server
    fetch('/query', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query: userInput })
    })
    .then(response => response.json())
    .then(data => {
        // Display bot response
        const botResponse = document.createElement('div');
        botResponse.className = 'chat-message bot-response';
        botResponse.textContent = `Bot: ${data.response}`;
        chatBox.appendChild(botResponse);

        // Clear user input
        document.getElementById('user-input').value = '';
        chatBox.scrollTop = chatBox.scrollHeight;  // Scroll to the bottom
    });
};
