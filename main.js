console.log("gd");

document.addEventListener("DOMContentLoaded", () => {
  fetch("terminology.json")
    .then((response) => response.json())
    .then((data) => {
      const cardContainer = document.getElementById("card-container");
      data.terms.forEach((term) => {
        const card = document.createElement("div");
        card.classList.add("card");
        const cardTitle = document.createElement("h2");
        cardTitle.textContent = term.title;
        const cardDescription = document.createElement("p");
        cardDescription.textContent = term.description;
        card.appendChild(cardTitle);
        card.appendChild(cardDescription);
        cardContainer.appendChild(card);
      });
    })
    .catch((error) => console.error("Error fetching terminology:", error));
});

// Add this script to your HTML file, preferably before the closing </body> tag
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// Optional: Remember user's preference
window.onload = function () {
  if (localStorage.getItem("dark-mode") === "true") {
    document.body.classList.add("dark-mode");
  }
};

function toggleDarkMode() {
  const isDarkMode = document.body.classList.toggle("dark-mode");
  localStorage.setItem("dark-mode", isDarkMode);
}


document.addEventListener('DOMContentLoaded')
