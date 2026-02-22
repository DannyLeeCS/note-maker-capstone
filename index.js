//import necessary assets
import express from "express"
import bodyParser from "body-parser";
var postingNotes=[];

const app = express();
const port = 3000;

app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }));

//renders home page
app.get("/", (req, res) => {
    res.render("index.ejs");
});

//route for SUBMITTING posts on home page
app.post("/submit", (req, res) => {
    //sumbit a post if it is not empty
    if(req.body["userNote"] != ""){
        postingNotes.push(req.body["userNote"])
    }
    //takes users to all posts page after submitting a note
    res.render("post.ejs", {
        postedNote: postingNotes
    });
});

//set up DELETE route to delete notes
app.post("/delete/:id", (req, res) => {
    const noteIndex = req.params.id;
    
    // Check if the index is valid and delete the targeted note
    if(noteIndex >= 0 && noteIndex < postingNotes.length) {
      postingNotes.splice(noteIndex, 1); // Removes the note at the index
    }
  
    // Redirect back to the notes page after deletion
    res.render("post.ejs", {
        postedNote: postingNotes
    });  
});

//set up the EDIT route
app.post("/edit/:id", (req, res) => {
    const noteIndex = req.params.id;
  
    // Render an edit form where the user can update their note
    res.render("editNote.ejs", { note: postingNotes[noteIndex], index: noteIndex });
});

//set up routes inside the EDIT note page
app.post("/update/:id", (req, res) => {
    const noteIndex = req.params.id;
  
    // Update the note content
    postingNotes[noteIndex] = req.body.updatedNote;
  
    // Redirect back to the notes page after updating
    res.render("post.ejs", {
        postedNote: postingNotes
    }); 
  });

//set up routes inside the EDIT note page, gets user back to all posts page if the user does not want to 
//edit the post
app.get("/post", (req, res) => {
    res.render("post.ejs", {
        postedNote: postingNotes
    });
});

//set up listening port
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

