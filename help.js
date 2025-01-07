// Function to extract and list matching patterns
function extractPatterns() {
  // Select all elements with class names containing 'label14'
  const elements = document.querySelectorAll('[class*="label14"]');
  
  // Regex pattern to match "F/XXX/FYF/2024"
  const pattern = /F\/\d+\/FYF\/2024/g;
  
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

// Call the function to execute
extractPatterns();
