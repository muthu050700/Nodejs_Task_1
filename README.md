Installation :

1. initialized npm using npm init command (package.json)
2. installed express.js

Project :

1. created a fs-inbuilt.js file is used to create a folder and file sysytem.

   - createFolder (Function name)

     - created a folder (mkdir)
     - created a file (writeFile)

   - getFile (Function name)
     - It is used to read all the files in the folder (readdir)

2. server.js file is used to write a api using express.js

   - GET Method

     - Path ("/get-api-files")
     - It is used to get all the files in the folder.

   - POST Method
     - Path ("/create-file")
       -It is used to create a folder and file.

3. created a port 4500 and server is running on 4500.

4. Deployed a project in Render, The url is attached below :

https://nodejs-task-1-2w6h.onrender.com/get-api-files

get-api-files - this is path.
