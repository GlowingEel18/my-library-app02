const express = require("express");
const cors = require("cors");
const app = express();
const Joi = require("joi");
const multer = require("multer");
const path = require("path");

app.use(cors());
app.use(express.json()); // Parse JSON bodies for POST requests
app.use(express.static("public"));

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

// Book data
const books = [
    {
      _id: 1,
      title: "1984",
      description: "A dystopian novel by George Orwell",
      main_image: "1984.jpg",
    },
    {
      _id: 2,
      title: "The Great Gatsby",
      description: "A classic novel by F. Scott Fitzgerald",
      main_image: "gatsby.jpg",
    },
    {
      _id: 3,
      title: "To Kill a Mockingbird",
      description: "A novel by Harper Lee about racial injustice",
      main_image: "mockingbird.jpg",
    },
    {
      _id: 4,
      title: "Moby Dick",
      description: "A novel about a quest to hunt a giant whale",
      main_image: "mobydick.jpg",
    },
    {
      _id: 5,
      title: "War and Peace",
      description: "A historical novel by Leo Tolstoy",
      main_image: "warandpeace.jpg",
    },
    {
      _id: 6,
      title: "Pride and Prejudice",
      description: "A romantic novel by Jane Austen",
      main_image: "prideandprejudice.jpg",
    },
    {
      _id: 7,
      title: "Crime and Punishment",
      description: "A psychological novel by Fyodor Dostoevsky",
      main_image: "crimeandpunishment.jpg",
    },
    {
      _id: 8,
      title: "Brave New World",
      description: "A dystopian novel by Aldous Huxley",
      main_image: "bravenewworld.jpg",
    },
    {
      _id: 9,
      title: "The Catcher in the Rye",
      description: "A novel by J.D. Salinger",
      main_image: "catcherintherye.jpg",
    },
    {
      _id: 10,
      title: "The Hobbit",
      description: "A fantasy novel by J.R.R. Tolkien",
      main_image: "hobbit.jpg",
    },
    {
      _id: 11,
      title: "Jane Eyre",
      description: "A novel by Charlotte Bronte",
      main_image: "janeeyre.jpg",
    },
    {
      _id: 12,
      title: "Wuthering Heights",
      description: "A novel by Emily Bronte",
      main_image: "wutheringheights.jpg",
    },
    {
      _id: 13,
      title: "The Odyssey",
      description: "An epic poem attributed to Homer",
      main_image: "odyssey.jpg",
    },
    {
      _id: 14,
      title: "The Iliad",
      description: "An ancient Greek epic poem attributed to Homer",
      main_image: "iliad.jpg",
    },
    {
      _id: 15,
      title: "Hamlet",
      description: "A tragedy by William Shakespeare",
      main_image: "hamlet.jpg",
    },
    {
      _id: 16,
      title: "The Divine Comedy",
      description: "An epic poem by Dante Alighieri",
      main_image: "divinecomedy.jpg",
    },
    {
      _id: 17,
      title: "The Brothers Karamazov",
      description: "A novel by Fyodor Dostoevsky",
      main_image: "karamazov.jpg",
    },
    {
      _id: 18,
      title: "The Count of Monte Cristo",
      description: "A novel by Alexandre Dumas",
      main_image: "montecristo.jpg",
    },
    {
      _id: 19,
      title: "The Picture of Dorian Gray",
      description: "A novel by Oscar Wilde",
      main_image: "doriangray.jpg",
    },
    {
      _id: 20,
      title: "The Scarlet Letter",
      description: "A novel by Nathaniel Hawthorne",
      main_image: "scarletletter.jpg",
    },
    {
      _id: 21,
      title: "Anna Karenina",
      description: "A novel by Leo Tolstoy",
      main_image: "annakarenina.jpg",
    },
    {
      _id: 22,
      title: "Don Quixote",
      description: "A novel by Miguel de Cervantes",
      main_image: "donquixote.jpg",
    },
    {
      _id: 23,
      title: "One Hundred Years of Solitude",
      description: "A novel by Gabriel Garcia Marquez",
      main_image: "solitude.jpg",
    },
    {
      _id: 24,
      title: "The Alchemist",
      description: "A novel by Paulo Coelho",
      main_image: "alchemist.jpg",
    },
    {
      _id: 25,
      title: "The Old Man and the Sea",
      description: "A novel by Ernest Hemingway",
      main_image: "oldmansea.jpg",
    },
    {
      _id: 26,
      title: "The Lord of the Rings",
      description: "An epic fantasy novel by J.R.R. Tolkien",
      main_image: "lotr.jpg",
    },
    {
      _id: 27,
      title: "Les Miserables",
      description: "A novel by Victor Hugo",
      main_image: "lesmiserables.jpg",
    },
    {
      _id: 28,
      title: "A Tale of Two Cities",
      description: "A novel by Charles Dickens",
      main_image: "taleoftwocities.jpg",
    },
    {
      _id: 29,
      title: "Alice's Adventures in Wonderland",
      description: "A novel by Lewis Carroll",
      main_image: "alice.jpg",
    },
    {
      _id: 30,
      title: "Heart of Darkness",
      description: "A novel by Joseph Conrad",
      main_image: "heartofdarkness.jpg",
    },
    {
      _id: 31,
      title: "Dracula",
      description: "A horror novel by Bram Stoker",
      main_image: "dracula.jpg",
    },
    {
      _id: 32,
      title: "Frankenstein",
      description: "A novel by Mary Shelley",
      main_image: "frankenstein.jpg",
    },
    {
      _id: 33,
      title: "The Call of the Wild",
      description: "A novel by Jack London",
      main_image: "callofthewild.jpg",
    },
    {
      _id: 34,
      title: "The Sun Also Rises",
      description: "A novel by Ernest Hemingway",
      main_image: "sunalsorises.jpg",
    },
    {
      _id: 35,
      title: "The Metamorphosis",
      description: "A novella by Franz Kafka",
      main_image: "metamorphosis.jpg",
    },
    {
      _id: 36,
      title: "Ulysses",
      description: "A novel by James Joyce",
      main_image: "ulysses.jpg",
    },
    {
      _id: 37,
      title: "Slaughterhouse-Five",
      description: "A novel by Kurt Vonnegut",
      main_image: "slaughterhousefive.jpg",
    },
    {
      _id: 38,
      title: "Catch-22",
      description: "A novel by Joseph Heller",
      main_image: "catch22.jpg",
    },
    {
      _id: 39,
      title: "The Catcher in the Rye",
      description: "A novel by J.D. Salinger",
      main_image: "catcherintherye.jpg",
    },
    {
      _id: 40,
      title: "Fahrenheit 451",
      description: "A dystopian novel by Ray Bradbury",
      main_image: "fahrenheit451.jpg",
    },
    {
      _id: 41,
      title: "Maus",
      description: "A graphic novel by Art Spiegelman",
      main_image: "maus.jpg",
    },
    {
      _id: 42,
      title: "Beloved",
      description: "A novel by Toni Morrison",
      main_image: "beloved.jpg",
    },
    {
      _id: 43,
      title: "The Road",
      description: "A novel by Cormac McCarthy",
      main_image: "theroad.jpg",
    },
    {
      _id: 44,
      title: "The Grapes of Wrath",
      description: "A novel by John Steinbeck",
      main_image: "grapesofwrath.jpg",
    },
    {
      _id: 45,
      title: "The Stranger",
      description: "A novel by Albert Camus",
      main_image: "thestranger.jpg",
    },
  ];  

// Serve the main HTML file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Endpoint to get all books
app.get("/api/books", (req, res) => {
  res.json(books);
});

// Endpoint to add a new book
app.post("/api/books", upload.single("image"), (req, res) => {
  console.log("Received a POST request to add a book");

  // Validate request body
  const result = validateBook(req.body);
  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    console.log("Validation error:", result.error.details[0].message);
    return;
  }

  // Create new book entry
  const book = {
    _id: books.length + 1, // Auto-generate a unique ID
    title: req.body.title,
    description: req.body.description,
  };

  // Handle file upload
  if (req.file) {
    book.main_image = req.file.filename;
  }

  // Add new book to the books array
  books.push(book);

  console.log("Added book:", book);
  res.status(200).send(book);
});

// Validation schema for book entries
const validateBook = (book) => {
  const schema = Joi.object({
    title: Joi.string().min(3).required(),
    description: Joi.string().min(5).required(),
  });

  return schema.validate(book);
};

// Start the server
const PORT = process.env.PORT || 3001;
// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/api/books`);
  });
