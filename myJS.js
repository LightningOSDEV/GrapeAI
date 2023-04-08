// Get the chatbot-response element and the buttons
const chatbotResponse = document.getElementById("chatbot-response");
const buttons = document.getElementById("chatbot-response-buttons");

// Hide the buttons by default
buttons.style.display = "none";

// Add an event listener for when the user hovers over the chatbot-response element
chatbotResponse.addEventListener("mouseenter", function () {
  // Show the buttons
  buttons.style.display = "block";
});

// Add an event listener for when the user leaves the chatbot-response element
chatbotResponse.addEventListener("mouseleave", function () {
  // Hide the buttons
  buttons.style.display = "none";
});

const inputMap = {
  "user-input": getBotResponse("How would a wormhole work?"),
};

const searchBtn = document.getElementById("submit-button");
const searchBox = document.getElementById("user-input");
const webContent = document.getElementById("chatbot-response");
const errorMessage = document.getElementsByClassName("error");

const apiKey = "AIzaSyDAaP6xHyEBtgJrW7C7Sa7UE8PNid22pc8";

function searchWeb() {
  const query = searchBox.value;

  const params = {
    q: query,
    cx: "d40f9d25e833042c5",
    key: apiKey,
  };

  axios
    .get("https://www.googleapis.com/customsearch/v1", { params })
    .then(function (response) {
      console.log(response.data.items);
      let resultsHtml = "";
      let count = 0;
      const shownUrls = new Set();
      response.data.items.forEach(function (item) {
        if (count === 2) {
          return;
        }
        if (!shownUrls.has(item.displayLink)) {
          shownUrls.add(item.displayLink);
          const snippet = item.snippet
            .replace(/(\d{4})/g, "")
            .replace(/\.\.\./g, "")
            .replace(
              /\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\b/g,
              "***"
            ); // remove year and three dots from snippet and replace first three letters of month with ***
          resultsHtml += `${snippet.slice(0, 170)}`;
          count++;
        }
      });
      outputMessage(resultsHtml);
    })
    .catch(function (error) {
      console.error(error);
      console.log(error.response); // log the response from the server
      if (error.response.status === 400) {
        webContent.innerHTML =
          "<span style='color:red'>Sorry but an error occurred, if this persists please contact Lightning support.</span>";
      } else {
        webContent.innerHTML = "Too many requests. Try again later.";
      }
      searchBtn.disabled = true;
      searchBox.disabled = true;
    });
}

searchBtn.addEventListener("click", function (event) {
  event.preventDefault();
  webContent.innerHTML = ""; // clear previous results
  errorMessage.innerHTML = ""; // clear previous error message
  searchWeb();
});

function outputMessage(message) {
  let index = 0;
  let chatbotResponse = document.getElementById("chatbot-response");
  let interval = setInterval(() => {
    if (index < message.length) {
      chatbotResponse.innerHTML += message.charAt(index);
      index++;
    } else {
      clearInterval(interval);
    }
  }, 35);
}

// Function to update the styled code in the chatbot respons

function clearResponse() {
  const chatbotResponse = document.querySelector("#chatbot-response");
  chatbotResponse.innerHTML = "";
}
const fileInput = document.getElementById("file-input");
const imgElement = document.getElementById("img-element");

fileInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.addEventListener("load", (event) => {
    const imageDataUrl = event.target.result;
    imgElement.src = imageDataUrl;
  });

  reader.readAsDataURL(file);
});

// JavaScript code

function detectError(code) {
  try {
    eval(code);
  } catch (error) {
    console.error(`Error detected: ${error}`);
    return `Error detected: ${error}`;
  }
}

// Check if user data exists in local storage and update the page accordingly
const userData = JSON.parse(localStorage.getItem("userData"));
const signUpLink = document.getElementById("sign-up-link");
const userInfoDiv = document.getElementById("user-info");

if (userData) {
  // User is already signed up
  signUpLink.textContent = "Sign Out";
  signUpLink.addEventListener("click", () => {
    // Remove user data from local storage
    localStorage.removeItem("userData");
    // Reload the page to update the UI
    location.reload();
  });

  // Display user data in the user info div
  userInfoDiv.textContent = `Account: ${userData.name} `;
} else {
  // User is not signed up
  signUpLink.textContent = "Sign Up";
}

function sayHello() {
  const users = document.getElementById("usr");
  users.innerHTML = userInput.value;
  users.style.color = "white";
  chatbotResponse.innerHTML = "";
  let message = `Hello! I am here to help!`;
  let index = 0;
  let interval = setInterval(() => {
    if (index < message.length) {
      chatbotResponse.innerHTML += message.charAt(index);
      index++;
    } else {
      clearInterval(interval);
    }
  }, 20);
}

function sayExplainQ() {
  chatbotResponse.innerHTML = "";
  let message = `Quantum computers are a new class of computing devices that leverage the principles of quantum mechanics to perform complex computations much faster than classical computers. Unlike classical computers that store and manipulate data using bits, quantum computers use quantum bits or qubits that can exist in multiple states at once. This enables them to perform certain computations, such as breaking encryption codes and simulating quantum systems, exponentially faster than classical computers. Despite their promise, building and maintaining a practical quantum computer is an extremely challenging task due to issues such as quantum decoherence and the need for error correction. Nevertheless, researchers are working hard to overcome these challenges and unlock the full potential of quantum computing.`;
  let index = 0;
  let interval = setInterval(() => {
    if (index < message.length) {
      chatbotResponse.innerHTML += message.charAt(index);
      index++;
    } else {
      clearInterval(interval);
    }
  }, 20);
}
function sayJs() {
  chatbotResponse.innerHTML = "";
  let message = `JavaScript (JS) is a high-level programming language that is widely used in web development. It is a dynamic, object-oriented, and interpreted language that is designed to run on web browsers. JavaScript is primarily used for creating interactive web pages, web applications, and server-side programming.

The language supports a range of data types, including strings, numbers, booleans, objects, and arrays, and provides a variety of programming constructs such as variables, functions, loops, and conditional statements. JS can interact with the Document Object Model (DOM) of a web page to manipulate its content, structure, and behavior.

JavaScript is a versatile language and has a wide range of libraries and frameworks that allow developers to create complex applications with ease. Some popular libraries and frameworks include React, Angular, Vue, Node.js, and jQuery.

Overall, JavaScript has become an essential part of modern web development and is used by developers to build responsive and interactive web applications that can run on different devices and platforms.`;
  let index = 0;
  let interval = setInterval(() => {
    if (index < message.length) {
      chatbotResponse.innerHTML += message.charAt(index);
      index++;
    } else {
      clearInterval(interval);
    }
  }, 20);
}
function sayWormhole() {
  chatbotResponse.innerHTML = "";
  let message = `A wormhole is a hypothetical passage through space-time that would allow for faster-than-light travel and potentially even time travel. The idea of a wormhole comes from the equations of general relativity, which suggest that it might be possible to connect two distant points in space-time by means of a shortcut or tunnel.

The concept of wormholes remains purely theoretical, as there is currently no observational evidence to support their existence. However, scientists have proposed various theoretical models for how wormholes could work based on the laws of physics. One model suggests that wormholes might be created by the warping of space-time by a massive object, such as a black hole. Another model suggests that wormholes might be created artificially by manipulating space-time using exotic matter with negative energy density.

While the idea of wormholes may seem like science fiction, scientists continue to explore the possibility of their existence and the potential implications for space travel and the nature of the universe.`;
  let index = 0;
  let interval = setInterval(() => {
    if (index < message.length) {
      chatbotResponse.innerHTML += message.charAt(index);
      index++;
    } else {
      clearInterval(interval);
    }
  }, 4);
}

const userInput = document.querySelector("#user-input");
const chats = document.querySelector("#chats");
const modal = document.querySelector("#myModal");
const continueBtn = document.querySelector("#continue-btn");
const closeBtn = document.querySelector(".close");

// Check if the page has been refreshed
if (!localStorage.getItem("chats")) {
  // If the page has been refreshed, reset the chats counter
  localStorage.setItem("chats", "0");
}

// Check if the chats counter has reached the limit of 10
if (parseInt(localStorage.getItem("chats")) >= 10) {
  // If the chats counter has reached the limit, show the modal
  modal.style.display = "block";

  // Close the modal when the user clicks the "x" button
  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  // Close the modal when the user clicks anywhere outside of the modal
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  // Reset the chats counter and chats data in local storage when the user clicks the "continue" button
  continueBtn.onclick = function () {
    localStorage.setItem("chats", "0");
    localStorage.removeItem("chatsData");
    userInput.disabled = false;
    modal.style.display = "none";
  };

  // Disable the input field if the chats counter has reached the limit
  userInput.disabled = true;
} else {
  // If the chats counter is below the limit, add an event listener to the "user-input" element
  userInput.addEventListener("change", function () {
    // Increment the chats counter and store it in local storage
    let chatsCount = parseInt(localStorage.getItem("chats")) + 1;
    localStorage.setItem("chats", chatsCount.toString());

    // Display the user's input in the chats div
    const chatMessage = document.createElement("p");

    // Set the chat message text to the user's input
    chatMessage.innerText = userInput.value;

    // Add the chat message to the chats div
    chats.appendChild(chatMessage);

    // Set the title of the page to the user's input
    document.title = userInput.value;

    // Store the chats data in local storage
    let chatsData = localStorage.getItem("chatsData");
    if (chatsData) {
      chatsData = JSON.parse(chatsData);
    } else {
      chatsData = [];
    }
    chatsData.push(userInput.value);
    localStorage.setItem("chatsData", JSON.stringify(chatsData));

    // Clear the input field
    userInput.value = "";
  });
}
/* Toggle the sidebar menu when the arrow is clicked */
document
  .querySelector(".sidebar-toggle")
  .addEventListener("click", function () {
    document.querySelector("#sidebar-container").classList.toggle("active");
  });
