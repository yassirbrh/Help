function extractPatterns(letter = "F", type = "FYF") {
  // Dynamically build the regex pattern
  const pattern = new RegExp(`${letter}\\/\\d+\\/${type}\\/2024`, "g");

  // Select all elements with class names containing 'label14'
  const elements = document.querySelectorAll('[class*="label14"]');

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
