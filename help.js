function extractPatterns(letter = "F", type = "FYF") {
  // Dynamically build the regex pattern
  const pattern = new RegExp(`${letter}\\/\\d+\\/${type}\\/2024`, "g");

  // Select all elements with class names containing 'label14'
  const elements = document.querySelectorAll('[id$="_test"]')
  // Array to store matches
  const matches = [];

  // Iterate over elements
  elements.forEach((element) => {
    const text = element.textContent || element.innerText; // Get the text content
    const found = text.match(pattern); // Find matches
    if (found) {
      matches.push(...found); // Add matches to the array
    }
  });

  // List the matches
  console.log("Matches:", matches);
}

// Call the function with your desired letter and type
extractPatterns("F", "FYF"); // Default: F and FYF
extractPatterns("G", "GRD"); // Example: G and GRD
/*
      Other thing !!!
*/
// Original array with duplicates
const originalArray = ["F/123/FYF/2024", "F/123/FYF/2024", "G/456/GRD/2024"];

// Create a unique array
const uniqueArray = [...new Set(originalArray)];

// Log both arrays
console.log("Original Array:", originalArray);
console.log("Unique Array:", uniqueArray);
