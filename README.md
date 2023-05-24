#The Final Project for the Web Development Course at Practicum

The project is an application for searching movies using The Movie Database (TMDB). The application allows users to search for movies in the TMDB database, add favorite movies to a list, delete them, and save them to the user's account.

### Backend Part

The back-end part can be split into two parts:

The first part enables searching for movies by keywords. It makes requests to the TMDB API and returns lists of movies in response.

The second part is a server built with Express.js, MongoDB, and Mongoose.js used for communication between the server and the database. The server allows for multiple users to be created, updating of data about them, creating and changing lists of saved movies.

### What's Been Done

- A simple server capable of handling CRUD requests was implemented.
- Schemas and models for two entities were created: user and movie.
- Routes were set up to handle user requests (getting information, creating a new user, updating user information).
- Routes were set up to handle movie requests (adding, deleting, and getting a list of movies).
- User authentication was implemented.
- Content routes are protected by authentication.
- Incoming data is validated using the Joi and Celebrate libraries, as well as at the schema level.
- Centralized error handling was implemented.
- Request and error logging (with Winston), as well as a rate limiter (with Rate Limiter) to limit the number of requests to the server, were configured.
- The server was deployed on Render ()

[The front-end part](https://github.com/OlgaTananova/movies-explorer-frontend)
