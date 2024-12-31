const fetchQuote = async () => {
  fetch('https://hindi-quotes.vercel.app/random')
    .then(response => response.json())
    .then(data => document.getElementById('quote').textContent = '" ' + data.quote + ' "');
}

fetchQuote();

const apiKey = "5d2cd0a4-40f2-4b6d-825e-db78584fd251"; // Replace with your API key
const liveScoreContainer = document.getElementById("live-cricket-score");

// Function to fetch live cricket scores
async function fetchLiveCricketScore() {
  try {
    // Fetch data from CricAPI
    const response = await fetch(`https://api.cricapi.com/v1/currentMatches?apikey=${apiKey}&offset=0`);
    const data = await response.json();

    if (data.status !== "success") {
      liveScoreContainer.innerHTML = "No live cricket matches available at the moment.";
      return;
    }

    // Find the first live match
    const liveMatch = data.data.find(match => match.matchStarted === true);

    if (liveMatch) {
      const matchDetails = `
                    <h3>${liveMatch.name}</h3>
                    <h3 style='font-size: 1.5rem'>${liveMatch.status}</h3>
                `;
      liveScoreContainer.innerHTML = matchDetails;
    } else {
      liveScoreContainer.innerHTML = "No live cricket matches right now.";
    }
  } catch (error) {
    console.error("Error fetching cricket scores:", error);
    liveScoreContainer.innerHTML = "Error fetching live cricket scores. Please try again later.";
  }
}

fetchLiveCricketScore();
setInterval(fetchLiveCricketScore, 60000);

// bot






    // Toggle chat body visibility when the chat icon is clicked
    document.getElementById("chatIcon").addEventListener("click", function () {
        const chatBody = document.getElementById("chatBody");
        chatBody.style.display = chatBody.style.display === "block" ? "none" : "block";
    });

    // Close the chat when the "X" button is clicked
    document.getElementById("closeChat").addEventListener("click", function () {
        document.getElementById("chatBody").style.display = "none";
    });

    // Handle the send button click event
    document.getElementById("sendButton").addEventListener("click", function () {
        const query = document.getElementById("userQuery").value;
        if (query) {
            sendToWhatsApp(query);
        } else {
            alert("Please enter a query.");
        }
    });

    // Function to send query to WhatsApp
    function sendToWhatsApp(query) {
        const whatsappNumber = "7745946883"; // Replace with your WhatsApp number
        const apiURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(query)}`;
        window.open(apiURL, "_blank");
    }

