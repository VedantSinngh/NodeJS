const path = require('path');

// Join paths
const fullPath = path.join('/path', 'subfolder', 'file.py');
console.log(fullPath); // Outputs: /path/subfolder/file.py


// Join paths
const full_Path = path.join('/path', 'subfolder', 'file.py');
console.log(full_Path); // Outputs: /path/subfolder/file.py

// Absolute path
const absolutePath = path.resolve('file.py');
console.log(absolutePath); // Outputs: /Users/username/path/file.py

// Extension name :- 
// Extract the extension name of a file path 
// What is the extension means the file type like .js, .py, .html etc.

const extensionName = path.extname('file.py');
console.log(extensionName); // Outputs: .py
