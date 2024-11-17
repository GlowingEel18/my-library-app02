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

const upload = multer(
  { 
    storage: storage 
  }, 
  {
    limits: { fileSize: 50 * 1024 * 1024 } // 50 MB
  }
);

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
  {
    _id: 11,
    title: "Jane Eyre",
    description: "A novel by Charlotte Bronte",
    main_image: "images/janeeyre.jpg",
  },
  {
    _id: 12,
    title: "Wuthering Heights",
    description: "A novel by Emily Bronte",
    main_image: "images/wutheringheights.jpg",
  },
  {
    _id: 13,
    title: "The Odyssey",
    description: "An epic poem attributed to Homer",
    main_image: "images/odyssey.jpg",
  },
  {
    _id: 14,
    title: "The Iliad",
    description: "An ancient Greek epic poem attributed to Homer",
    main_image: "images/iliad.jpg",
  },
  {
    _id: 15,
    title: "Hamlet",
    description: "A tragedy by William Shakespeare",
    main_image: "images/hamlet.jpg",
  },
  {
    _id: 16,
    title: "The Divine Comedy",
    description: "An epic poem by Dante Alighieri",
    main_image: "images/divinecomedy.jpg",
  },
  {
    _id: 17,
    title: "The Brothers Karamazov",
    description: "A novel by Fyodor Dostoevsky",
    main_image: "images/karamazov.jpg",
  },
  {
    _id: 18,
    title: "The Count of Monte Cristo",
    description: "A novel by Alexandre Dumas",
    main_image: "images/montecristo.jpg",
  },
  {
    _id: 19,
    title: "The Picture of Dorian Gray",
    description: "A novel by Oscar Wilde",
    main_image: "images/doriangray.jpg",
  },
  {
    _id: 20,
    title: "The Scarlet Letter",
    description: "A novel by Nathaniel Hawthorne",
    main_image: "images/scarletletter.jpg",
  },
  {
    _id: 21,
    title: "Anna Karenina",
    description: "A novel by Leo Tolstoy",
    main_image: "images/annakarenina.jpg",
  },
  {
    _id: 22,
    title: "Don Quixote",
    description: "A novel by Miguel de Cervantes",
    main_image: "images/donquixote.jpg",
  },
  {
    _id: 23,
    title: "One Hundred Years of Solitude",
    description: "A novel by Gabriel Garcia Marquez",
    main_image: "images/solitude.jpg",
  },
  {
    _id: 24,
    title: "The Alchemist",
    description: "A novel by Paulo Coelho",
    main_image: "images/alchemist.jpg",
  },
  {
    _id: 25,
    title: "The Old Man and the Sea",
    description: "A novel by Ernest Hemingway",
    main_image: "images/oldmansea.jpg",
  },
  {
    _id: 26,
    title: "The Lord of the Rings",
    description: "An epic fantasy novel by J.R.R. Tolkien",
    main_image: "images/lotr.jpg",
  },
  {
    _id: 27,
    title: "Les Miserables",
    description: "A novel by Victor Hugo",
    main_image: "images/lesmiserables.jpg",
  },
  {
    _id: 28,
    title: "A Tale of Two Cities",
    description: "A novel by Charles Dickens",
    main_image: "images/taleoftwocities.jpg",
  },
  {
    _id: 29,
    title: "Alice's Adventures in Wonderland",
    description: "A novel by Lewis Carroll",
    main_image: "images/alice.jpg",
  },
  {
    _id: 30,
    title: "Heart of Darkness",
    description: "A novel by Joseph Conrad",
    main_image: "images/heartofdarkness.jpg",
  },
  {
    _id: 31,
    title: "Dracula",
    description: "A horror novel by Bram Stoker",
    main_image: "images/dracula.jpg",
  },
  {
    _id: 32,
    title: "Frankenstein",
    description: "A novel by Mary Shelley",
    main_image: "images/frankenstein.jpg",
  },
  {
    _id: 33,
    title: "The Call of the Wild",
    description: "A novel by Jack London",
    main_image: "images/callofthewild.jpg",
  },
  {
    _id: 34,
    title: "The Sun Also Rises",
    description: "A novel by Ernest Hemingway",
    main_image: "images/sunalsorises.jpg",
  },
  {
    _id: 35,
    title: "The Metamorphosis",
    description: "A novella by Franz Kafka",
    main_image: "images/metamorphosis.jpg",
  },
  {
    _id: 36,
    title: "Ulysses",
    description: "A novel by James Joyce",
    main_image: "images/ulysses.jpg",
  },
  {
    _id: 37,
    title: "Slaughterhouse-Five",
    description: "A novel by Kurt Vonnegut",
    main_image: "images/slaughterhousefive.jpg",
  },
  {
    _id: 38,
    title: "Catch-22",
    description: "A novel by Joseph Heller",
    main_image: "images/catch22.jpg",
  },
  {
    _id: 39,
    title: "The Catcher in the Rye",
    description: "A novel by J.D. Salinger",
    main_image: "images/catcherintherye.jpg",
  },
  {
    _id: 40,
    title: "Fahrenheit 451",
    description: "A dystopian novel by Ray Bradbury",
    main_image: "images/fahrenheit451.jpg",
  },
  {
    _id: 41,
    title: "Maus",
    description: "A graphic novel by Art Spiegelman",
    main_image: "images/maus.jpg",
  },
  {
    _id: 42,
    title: "Beloved",
    description: "A novel by Toni Morrison",
    main_image: "images/beloved.jpg",
  },
  {
    _id: 43,
    title: "The Road",
    description: "A novel by Cormac McCarthy",
    main_image: "images/theroad.jpg",
  },
  {
    _id: 44,
    title: "The Grapes of Wrath",
    description: "A novel by John Steinbeck",
    main_image: "images/grapesofwrath.jpg",
  },
  {
    _id: 45,
    title: "The Stranger",
    description: "A novel by Albert Camus",
    main_image: "images/thestranger.jpg",
  },
]; 

// Serve the main HTML file
app.get("/", (req, res) => {
  console.log('returning  hello world');
  res.sendFile(path.join(__dirname, "index.html"));
});

// Endpoint to get all books
app.get("/api/books", (req, res) => {
  console.log('returning  hello world');
  res.json(books);
  console.log('returning ', books.length);
});

// Upload Endpoint That will accept files
app.post("/api/books", upload.single("img"), (req, res) => {
  
  console.log('Req Body: ', req.body);
  // Validate request body
  if (req.files === null || req.files === 'undefined') {
    return res.status(400).json({ msg: "No file uploaded" });
  }
 
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
  if (req.body.image) {
     book.main_image = "images/"+ req.body.image;
  }
  
  //Add book to the books array
  books.push(book);
  console.log("Added book:", JSON.stringify(book));
  res.status(200).send(book);
});


// Validation schema for book entries
const validateBook = (book) => {
  const schema = Joi.object({
    _id: Joi.allow(""),
    title: Joi.string().min(3).required(),
    description: Joi.string().min(5).required(),
    image: Joi.allow(""),
  });
  return schema.validate(book);
};

// Start the server
const PORT = process.env.PORT || 3001;
// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/api/books`);
});
