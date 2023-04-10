const chatForm = document.getElementById("chat-form");
const messages = document.getElementById("messages");

const API_URL =
  "https://api-inference.huggingface.co/models/google/flan-t5-xxl";
const API_KEY = "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";

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const userInput = document.getElementById("user-input").value;
  addMessage(userInput, "user-message");

  fetchResponse(userInput)
    .then((response) => {
      addMessage(response, "bot-message");
    })
    .catch((error) => {
      console.error("Error fetching response from Hugging Face API:", error);
    });

  document.getElementById("user-input").value = "";
});

function addMessage(content, className) {
  const messageElement = document.createElement("div");
  messageElement.classList.add(className);
  messageElement.textContent = content;
  messages.appendChild(messageElement);
  messages.scrollTop = messages.scrollHeight;
}

async function fetchResponse(userInput) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({ inputs: userInput }),
  };

  try {
    const response = await fetch(API_URL, requestOptions);
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    const data = await response.json();
    if (data.error) {
      throw new Error(data.error.message);
    }
    return data[0].generated_text || "I couldn't understand your question.";
  } catch (error) {
    console.error("Error fetching response from Hugging Face API:", error);
    return "An error occurred. Please try again later.";
  }
}
