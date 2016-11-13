### Simpleton Flashcards

#### Frontend

The frontend folder has its own package.json file and front end node modules must be installed separately.
* Install frontend node modules by running `npm install` inside the frontend folder.

You can run the front end both by running the backend server or independently.
To run the front end independently, navigate to the frontend folder and run `npm start`. This will run the server with `hot reload` enabled.
To run the entire app, navigate to the backend folder and run the server. Nodemon is recommended. You must run `Webpack` to update the *index.bundle.js* file.

#### Backend
The backend folder has its own package.json file and front end node modules must be installed separately.
Running the Express server must be done from within the backend folder.
