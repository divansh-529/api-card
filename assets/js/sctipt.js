
// Array of possible professions
const professions = [
    "Software Engineer",
    "Data Scientist",
    "Doctor",
    "Graphic Designer",
    "Teacher",
    "Project Manager",
    "Product Manager",
    "Marketing Specialist",
    "Accountant",
    "Business Analyst",
    "Nurse",
    "Artist",
    "Architect",
    "Civil Engineer",
    "Consultant"
];

// Fetch data from the RandomUser API for 20 profiles
const API_URL = "https://randomuser.me/api/?results=20"; // Fetch 20 random users

const container = document.getElementById("cards-container");

fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        data.results.forEach(user => {
            // Randomly assign a profession
            const randomProfession = professions[Math.floor(Math.random() * professions.length)];

            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first} ${user.name.last}">
            <div class="card-content">
              <h2>${user.name.first} ${user.name.last}, ${user.dob.age}</h2>
              <p> ${user.email}</p>
              <p> ${user.location.city}, ${user.location.country}</p>
              <p> ${randomProfession}</p>
            </div>
          `;
            container.appendChild(card);
        });
    })
    .catch(error => console.error("Error fetching data:", error));
