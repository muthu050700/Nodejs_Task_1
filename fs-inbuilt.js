const fs = require("fs"); // importing fs has a common js / (CJS)

const createFolder = (folderPath, fileName, content, cbfn = () => {}) => {
  //step 1: check whether the folder is exits or not

  if (!fs.existsSync(folderPath)) {
    //creating the folder

    fs.mkdir(folderPath, (err) => {
      if (err) {
        console.log("There is some err", err);
      } else {
        console.log("The file created successfully");
      }
    });
  } else {
    console.log("Folder is already exits");
  }

  //step2: creating the file

  fs.writeFile(`${folderPath}/${fileName}`, content, cbfn);
};

// createFolder("./files", "stranger-things", "series of netfilx");

// Reading the files

const getFiles = (folderPath, successFn, errorFn) => {
  fs.readdir(`${folderPath}`, "utf-8", (err, data) => {
    if (err) {
      errorFn();
      console.log("There is some err", err);
    } else {
      successFn(data);
    }
  });
};

//Exporting the getFiles fn has a common js

module.exports = { getFiles, createFolder };
