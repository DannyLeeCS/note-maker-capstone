# Note Maker (Capstone Project)

Note Maker is a simple note-taking web application built with Node.js, Express, and EJS. The app allows users to create, view, edit, and delete notes through a basic CRUD workflow. This project was built as part of my Computer Science coursework to practice server-side routing, template rendering, and form handling in Express.

Notes are stored in memory using a JavaScript array, so all data will be cleared when the server restarts.

## Screenshots
<img width="1896" height="861" alt="image" src="https://github.com/user-attachments/assets/71db34e0-62ec-4e72-a682-8d0db054978b" />
<img width="1915" height="607" alt="image" src="https://github.com/user-attachments/assets/ad795293-86aa-41ce-a2a5-b9dffc0a41cd" />
<img width="1914" height="813" alt="image" src="https://github.com/user-attachments/assets/7a413d61-a7d0-409d-bebc-2f96f830963f" />

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
