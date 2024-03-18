const names = ['Alice', 'Bob', 'Carol', 'David', 'Emily'];
const occupations = ['Writer', 'Teacher', 'Programmer', 'Designer', 'Consultant'];

let freelancers = [
  { name: 'Alice', occupation: 'Writer', startingPrice: 30 },
  { name: 'Bob', occupation: 'Teacher', startingPrice: 50 },
  { name: 'Carol', occupation: 'Programmer', startingPrice: 70 }
];
// Initially, the used names are those of the initial freelancers
let usedNames = ['Alice', 'Bob', 'Carol'];

// Function to calculate the average starting price
// Round to the nearest whole number
const calculateAveragePrice = () => {
  const totalPrices = freelancers.reduce((sum, freelancer) => sum + freelancer.startingPrice, 0);
  const averagePrice = totalPrices / freelancers.length;
  return Math.round(averagePrice);
}

// Function to render the initial array of freelancers onto the page
const renderFreelancers = () => {
  // Select the element with the ID 'freelancerList'
  const container = document.querySelector('#freelancerList');

  // Clear previous content of the 'freelancerList' element
  container.innerHTML = '';

  // Iterate through each freelancer in the 'freelancers' array
  freelancers.forEach(freelancer => {
    // Create a new 'div' element
    const div = document.createElement('div');

    // Set the text content of the div to display the freelancer's name, occupation, and starting price
    div.textContent = `${freelancer.name} - ${freelancer.occupation}, starting price: $${freelancer.startingPrice}`;

    // Append the newly created div to the 'freelancerList' element
    container.appendChild(div);
  });
}
renderFreelancers();