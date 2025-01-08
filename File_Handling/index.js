const { readFile } = require('fs');
const fs = require('fs/promises'); // CommonJS syntax for importing fs/promises

// Reading a file
const read_file = async (fileName) => {
    const data = await fs.readFile(fileName, 'utf8');
    console.log(data);
};    
read_file('sample.txt'); 

// Creating a file
const create_file = async (fileName,data) => {
    await fs.writeFile(fileName,data);

    console.log('File Created Sucessfully');
};

create_file('sample1.txt','Hello World');

// Add content to a file

const append_file = async (fileName,data) => {
    await fs.appendFile(fileName,data);

    console.log("Data added sucessfully");
};
append_file('sample1.txt','\nThis is the appended data');

// create a folder 

const create_folder = async (folderName) => {
    await fs.mkdir(folderName, { recursive: true });
    // recursive: true will create the folder and its parent folders if they don't exist
    // nested folders can be created using recursive: true

    console.log('Folder Created Sucessfully');
};

create_folder('rc/components/index.js');

// src/components/index.js
