const { execSync } = require('child_process');
const express = require('express');
const app = express();

// --- 1. RUN PYTHON SCRIPT FIRST ---
try {
  console.log('[INFO] Running SSG...');
  
  // Replace 'script.py' with the actual path to your script
  // Use path.join to ensure it works regardless of where you launch the terminal
  const pythonPath = './static-website-generator/ssg.py'; 
  
  // Execute the script. 'stdio: inherit' prints Python's output to YOUR terminal.
  execSync(`python3 "${pythonPath}" --languages='en,fr' --translations-dir='./froelen.github.io/ssg-lang/' --templates='index,credits,quotes,start' --templates-dir='./froelen.github.io/ssg-templates/' --output-dir='./froelen.github.io/'`, { stdio: 'inherit' });
  
  console.log('[INFO] Static site generation successfull.');
} catch (error) {
  console.error('[ERROR] Static site generation failed! Stopping server start.');
  process.exit(1); // Exit if the pre-process fails
}

// --- 2. SETUP EXPRESS ---
const staticOptions = {
  extensions: ['html', 'htm'],
  index: 'index.html'
};
const path = require('path');
app.use('/', express.static(path.join(__dirname), staticOptions));

app.listen(8080, '0.0.0.0', () => {
  console.log('[INFO] Server running at http://localhost:8080 and <your-ip>:8080');
  console.log('[INFO] Hit Ctrl + C to stop the server.')
});