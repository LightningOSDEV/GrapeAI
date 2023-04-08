import axios from 'https://cdn.skypack.dev/axios';

async function query(data) {
	const response = await axios.post('https://api-inference.huggingface.co/models/google/flan-t5-xxl', {
	  inputs: data
	}, {
	  headers: {
		Authorization: 'Bearer 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'
	  }
	});
  
	return response.data;
  }

  async function getBotResponse() {
	const userInput = document.getElementById('user-input').value;
  
	// Display the user's input in the chat log
	const chatLog = document.getElementById('chat-log');
	const userMessage = document.createElement('div');
	userMessage.classList.add('user-message');
	userMessage.innerText = userInput;
	chatLog.appendChild(userMessage);
  
	// Call the Hugging Face API with the user's input
	const response = await query(userInput);
  
	// Display the API response in the chat log
	const botMessage = document.createElement('div');
	botMessage.classList.add('bot-message');
	botMessage.innerText = response[0].generated_text;
	chatLog.appendChild(botMessage);
  }