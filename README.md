# Note Maker (Capstone Project)

Note Maker is a simple note-taking web application built with Node.js, Express, and EJS. The app allows users to create, view, edit, and delete notes through a basic CRUD workflow. This project was built as part of my Computer Science coursework to practice server-side routing, template rendering, and form handling in Express.

Notes are stored in memory using a JavaScript array, so all data will be cleared when the server restarts.

## Features

- Create a new note  
- View all notes  
- Edit existing notes  
- Delete notes  
- Prevent submission of empty notes  

## Tech Stack

- Node.js  
- Express.js  
- EJS  
- body-parser  
- HTML / CSS (served as static assets)  

## Getting Started

1. Install dependencies:
bash
npm install

2. Start the server
node index.js

1. Install dependencies:
http://localhost:3000

## Project Structure
.
├── public/         # Static assets (CSS, images, client-side JS)
├── views/          # EJS templates (index.ejs, post.ejs, editNote.ejs)
├── index.js        # Express server and routes
├── package.json
└── README.md

## What I Learned
- How to build a basic Express server and define routes
- How to use EJS to render dynamic pages
- How to handle form submissions with body-parser
- How to implement a simple CRUD workflow
- How to structure a small web application

## Future Improvements
- ersist notes using a database instead of in-memory storage
- Add unique IDs for notes instead of using array indices
- Improve UI/UX and add user feedback messages
- Add basic tests for routes and logic

## Author
Le Duy Anh (Danny Lee)
Email: dal17@student.london.ac.uk
GitHub: [https://github.com/DannyLeeCS]