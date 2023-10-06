// Complete the js code

const limit = 50; // Heap memory usage limit in MB
let elements = []; // Array to hold generated DOM elements

// Function to generate DOM elements
const generateElements = () => {
  // complete the function
	const newElement = document.createElement('p');
  newElement.textContent = 'New Element';
  document.body.appendChild(newElement);
  elements.push(newElement);
  updateMemoryUsage();
};

// Function to remove DOM elements
const removeElements = () => {
  // complete the function
	if (elements.length > 0) {
    const elementToRemove = elements.pop();
    document.body.removeChild(elementToRemove);
  }
  updateMemoryUsage();
};

// Function to update memory usage display
const updateMemoryUsage = () => {
  // Complete this function
	const memoryUsedInMB = window.performance.memory.usedJSHeapSize / (1024 * 1024);
  document.getElementById('memory').textContent = `Memory used: ${memoryUsedInMB.toFixed(2)} MB`;
};

// Add event listeners to buttons
document.getElementById("generate").addEventListener("click", generateElements);
document.getElementById("remove").addEventListener("click", removeElements);

// Set interval to update memory usage every second
setInterval(updateMemoryUsage, 1000);
