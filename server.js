const express = require("express");
const cors = require("cors");
const app = express();
const Joi = require("joi");
const multer = require("multer");

app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));
app.use(express.json());
app.use(cors());


// Set up storage for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Book data
const books = [
  {
    _id: 1,
    title: "1984",
    description: "A dystopian novel by George Orwell",
    main_image: "images/1984.jpg",
  },
  {
    _id: 2,
    title: "The Great Gatsby",
    description: "A classic novel by F. Scott Fitzgerald",
    main_image: "images/gatsby.jpg",
  },
  {
    _id: 3,
    title: "To Kill a Mockingbird",
    description: "A novel by Harper Lee about racial injustice",
    main_image: "images/mockingbird.jpg",
  },
  {
    _id: 4,
    title: "Moby Dick",
    description: "A novel about a quest to hunt a giant whale",
    main_image: "images/mobydick.jpg",
  },
  {
    _id: 5,
    title: "War and Peace",
    description: "A historical novel by Leo Tolstoy",
    main_image: "images/warandpeace.jpg",
  },
  {
    _id: 6,
    title: "Pride and Prejudice",
    description: "A romantic novel by Jane Austen",
    main_image: "images/prideandprejudice.jpg",
  },
  {
    _id: 7,
    title: "Crime and Punishment",
    description: "A psychological novel by Fyodor Dostoevsky",
    main_image: "images/crimeandpunishment.jpg",
  },
  {
    _id: 8,
    title: "Brave New World",
    description: "A dystopian novel by Aldous Huxley",
    main_image: "images/bravenewworld.jpg",
  },
  {
    _id: 9,
    title: "The Catcher in the Rye",
    description: "A novel by J.D. Salinger",
    main_image: "images/catcherintherye.jpg",
  },
  {
    _id: 10,
    title: "The Hobbit",
    description: "A fantasy novel by J.R.R. Tolkien",
    main_image: "images/hobbit.jpg",
  },

];


// Endpoint to get all books
app.get("/api/books", (req, res) => {
  console.log('returning  hello world');
  res.json(books);
  console.log('returning ', books.length);
});

// Upload Endpoint That will accept files
app.post("/api/books", upload.single("img"), (req, res) => {

  //JOI Validation
  const result = validateBook(req.body);
  if (result.error) {
    console.log("Validation error:", result.error.details[0].message);
    return res.status(400).json({ msg: result.error.details[0].message });
  }

  // Create new book entry
  const book = {
    _id: books.length + 1, // Auto-generate a unique ID
    title: req.body.title,
    description: req.body.description
  };

  //Handle file name
  if (req.file) {
     book.main_image = "images/" + req.file.filename;
  }
  //Add book to the books array
  books.push(book);
  //console.log("Added book:", JSON.stringify(book));
  res.status(200).send(book);
});


//PUT
app.put("/api/books/:id", upload.single("img"), (req, res) => {

  let book = books.find((h) => h._id === parseInt(req.params.id));

  if (!book) res.status(400).send("Book with given id was not found");

  const result = validateBook(req.body);

  if (result.error) {
    console.log('This is the rejected field ->', result.error.field);
    res.status(400).send(result.error.details[0].message);
    return;
  }

  book.title = req.body.title;
  book.description = req.body.description;

  if (req.file) {
    book.main_image = "images/" + req.file.filename;
  }
  console.log('book: ', JSON.stringify(book));
  res.send(book);
});

//DELETE
app.delete("/api/books/:id", (req, res) => {
  const book = books.find((h) => h._id === parseInt(req.params.id));

  if (!book) {
    res.status(404).send("The book with the given id was not found");
  }

  const index = books.indexOf(book);
  books.splice(index, 1);
  res.send(book);
});

// Validation schema for book entries
const validateBook = (book) => {
  const schema = Joi.object({
    _id: Joi.allow(""),
    title: Joi.string().min(3).required(),
    description: Joi.string().min(5).required(),
    main_image: Joi.allow(""),
  });
  return schema.validate(book);
};

// Start the server
const PORT = process.env.PORT || 3001;
// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/api/books`);
});
