const names = ["Alice", "Bob", "Carol", "David", "Eve"];
const occupations = ["Writer", "Teacher", "Programmer", "Designer", "Consultant"];

const freelancers = [
    { name: "Alice", occupation: "Writer", startingPrice: 30 },
    { name: "Bob", occupation: "Teacher", startingPrice: 50 },
];

function renderFreelancers() {
    const freelancersList = document.getElementById("freelancers-list");

    freelancersList.innerHTML = "";

    freelancers.forEach((freelancer) => {
        const freelancerElement = document.createElement("div");
        freelancerElement.innerHTML = `
            <p>Name: ${freelancer.name}</p>
            <p>Occupation: ${freelancer.occupation}</p>
            <p>Starting Price: $${freelancer.startingPrice}</p>
        `;
        freelancersList.appendChild(freelancerElement);
    });
}

function generateRandomFreelancer() {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
    const randomStartingPrice = Math.floor(Math.random() * 100) + 20; // Generates a random price between $20 and $119

    const newFreelancer = { name: randomName, occupation: randomOccupation, startingPrice: randomStartingPrice };
    freelancers.push(newFreelancer);

    renderFreelancers();
}

setInterval(generateRandomFreelancer, 5000); // Adds a new freelancer every 5 seconds (5000 milliseconds)

function calculateAverageStartingPrice() {
    const totalPrices = freelancers.reduce((sum, freelancer) => sum + freelancer.startingPrice, 0);
    const averagePrice = totalPrices / freelancers.length;
    const averagePriceMessage = `Average Starting Price: $${averagePrice.toFixed(2)}`;
    document.getElementById("average-price").textContent = averagePriceMessage;
}
