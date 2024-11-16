const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const app = express();
const Joi = require("joi");
const multer = require("multer");
const path = require("path");

app.use(cors());
app.use(fileUpload);
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
    "_id": "1",
    "title": "1984",
    "description": "A dystopian novel by George Orwell",
    "image": "images/1984.jpg"
    },
    {
    "_id": "2",
    "title": "Andromeda",
    "description": "A novel set in a sci-fi universe",
    "image": "images/Andromeda.jpg"
    },
    {
    "_id": "3",
    "title": "Angels & Demons",
    "description": "A mystery thriller novel by Dan Brown",
    "image": "images/Angels&Demons.jpg"
    },
    {
    "_id": "4",
    "title": "Becoming",
    "description": "A memoir by Michelle Obama",
    "image": "images/Becoming.jpg"
    },
    {
    "_id": "5",
    "title": "Big Little Lies",
    "description": "A novel by Liane Moriarty",
    "image": "images/BigLittleLies.jpg"
    },
    {
    "_id": "6",
    "title": "Desire",
    "description": "A historical novel by Pulitzer Prize winner",
    "image": "images/Desire.jpg"
    },
    {
    "_id": "7",
    "title": "Dracula",
    "description": "A psychological novel by Bram Stoker",
    "image": "images/dracula.jpg"
    },
    {
    "_id": "8",
    "title": "Dune",
    "description": "A novel by Frank Herbert",
    "image": "images/Dune.jpg"
    },
    {
    "_id": "9",
    "title": "Educated",
    "description": "A fantasy novel by Tara Westover",
    "image": "images/Educated.jpg"
    },
    {
    "_id": "10",
    "title": "Enchanted Forest",
    "description": "A magical story set in an enchanted forest",
    "image": "images/EnchantedForest.jpg"
    },
    {
    "_id": "11",
    "title": "Fahrenheit 451",
    "description": "A dystopian novel by Ray Bradbury",
    "image": "images/Fahrenheit.jpg"
    },
    {
    "_id": "12",
    "title": "Fantasy",
    "description": "A collection of fantasy stories",
    "image": "images/Fantasy.jpg"
    },
    {
    "_id": "13",
    "title": "Fiction",
    "description": "Various fictional stories",
    "image": "images/Fiction.jpg"
    },
    {
    "_id": "14",
    "title": "Foundation",
    "description": "A science fiction novel by Isaac Asimov",
    "image": "images/Foundation.jpg"
    },
    {
    "_id": "15",
    "title": "Frankenstein",
    "description": "A Gothic novel by Mary Shelley",
    "image": "images/frankenstein.jpg"
    },
    {
    "_id": "16",
    "title": "Gory Details",
    "description": "An exploration of the dark side of nature",
    "image": "images/GoryDetails.jpg"
    },
    {
    "_id": "17",
    "title": "Hamlet",
    "description": "A tragedy by William Shakespeare",
    "image": "images/Hamlet.jpg"
    },
    {
    "_id": "18",
    "title": "Harry Potter and the Philosopher's Stone",
    "description": "A fantasy novel by J.K. Rowling",
    "image": "images/HarryPotterThrone.jpg"
    },
    {
    "_id": "19",
    "title": "Horror",
    "description": "A collection of horror stories",
    "image": "images/Horror.jpg"
    },
    {
    "_id": "20",
    "title": "Hound",
    "description": "A detective novel by Arthur Conan Doyle",
    "image": "images/Hound.jpg"
    },
    {
    "_id": "21",
    "title": "Humankind",
    "description": "A non-fiction book about humanity",
    "image": "images/Humankind.jpg"
    },
    {
    "_id": "22",
    "title": "Ice & Fire",
    "description": "A fantasy novel in a medieval world",
    "image": "images/Ice&Fire.jpg"
    },
    {
    "_id": "23",
    "title": "Me Before You",
    "description": "A romance novel by Jojo Moyes",
    "image": "images/me_before_you.jpg"
    },
    {
    "_id": "24",
    "title": "Mystery",
    "description": "A collection of mystery stories",
    "image": "images/Mystery.jpg"
    },
    {
    "_id": "25",
    "title": "Neuromancer",
    "description": "A cyberpunk novel by William Gibson",
    "image": "images/Neuromancer.jpg"
    },
    {
    "_id": "26",
    "title": "New Novels",
    "description": "A collection of new novels",
    "image": "images/New Novels.jpg"
    },
    {
    "_id": "27",
    "title": "Non-Fiction",
    "description": "Various non-fiction works",
    "image": "images/NonFiction.jpg"
    },
    {
    "_id": "28",
    "title": "Periodic Tables",
    "description": "A book on chemistry",
    "image": "images/Periodic Tables.jpg"
    },
    {
    "_id": "29",
    "title": "Pride and Prejudice",
    "description": "A romance novel by Jane Austen",
    "image": "images/Prejudice.jpg"
    },
    {
    "_id": "30",
    "title": "Romance",
    "description": "A collection of romance stories",
    "image": "images/Romance.jpg"
    },
    {
    "_id": "31",
    "title": "Salesman",
    "description": "A story about the life of a salesman",
    "image": "images/Salesman.jpg"
    },
    {
    "_id": "32",
    "title": "Sci-Fi",
    "description": "A collection of sci-fi stories",
    "image": "images/Sci-Fi.jpg"
    },
    {
    "_id": "33",
    "title": "Scientific Mystery",
    "description": "Mysteries based on science",
    "image": "images/Scientific Mystery.jpg"
    },
    {
    "_id": "34",
    "title": "Shadow",
    "description": "A novel exploring the darkness of society",
    "image": "images/Shadow.jpg"
    },
    {
    "_id": "35",
    "title": "Silent Observer",
    "description": "A book on the power of silence",
    "image": "images/silentObserver.jpg"
    },
    {
    "_id": "36",
    "title": "Strange Chemistry",
    "description": "A book on unusual chemical reactions",
    "image": "images/StrangeChemistry.jpg"
    },
    {
    "_id": "37",
    "title": "The Awakening",
    "description": "A novel by Kate Chopin about self-discovery",
    "image": "images/TheAwakening.jpg"
    },
    {
    "_id": "38",
    "title": "The Shining",
    "description": "A horror novel by Stephen King",
    "image": "images/TheShining.jpg"
    },
    {
    "_id": "39",
    "title": "The Silent Observer",
    "description": "An observer’s perspective on life",
    "image": "images/TheSilentObserver.jpg"
    },
    {
    "_id": "40",
    "title": "To Kill a Mockingbird",
    "description": "A novel by Harper Lee",
    "image": "images/To Kill a MockingBird.jpg"
    },
    {
    "_id": "41",
    "title": "Whispers Wind",
    "description": "A collection of whispers from nature",
    "image": "images/WhispersWind.jpg"
    }
];  

// Serve the main HTML file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Endpoint to get all books
app.get("/api/books", (req, res) => {
  console.log('Received request for books');
  res.json(books);
  console.log('response books count: %d', books.length); 
});

// Endpoint to add a new book
// app.post("/api/books", upload.single("image"), (req, res) => {
//   console.log("Received a POST request to add a book");

//   // Validate request body
//   const result = validateBook(req.body);
//   if (result.error) {
//     res.status(400).send(result.error.details[0].message);
//     console.log("Validation error:", result.error.details[0].message);
//     return;
//   }

//   // Create new book entry
//   const book = {
//     _id: books.length + 1, // Auto-generate a unique ID
//     title: req.body.title,
//     description: req.body.description,
//   };

//   // Handle file upload
//   if (req.file) {
//     book.image = req.file.filename;
//   }

//   // Add new book to the books array
//   books.push(book);

//   console.log("Added book:", book);
//   res.status(200).send(book);
// });

//FIXME 
// Upload Endpoint That will accept files
app.post("/api/books", (req, res) => {
  console.log(req.files);
 
  // Check if file is not available return message with status 400.
  // Validate request body
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }
 
  //JOI Validation
  const result = validateBook(req.body);
  if (result.error) {
    console.log("Validation error:", result.error.details[0].message);
    return res.status(400).json({ msg: result.error.details[0].message });
  }

  const file = req.files.file;
  // We need unique file name to save it in folder and then use filename to access it. I have replace space with - and concatinated file name with Date String. We can also used uuid package as well.
  const fileName = `${file.name.replaceAll(" ", "-")}`;
  // Create new book entry
  const book = {
    _id: books.length + 1, // Auto-generate a unique ID
    title: req.body.title,
    description: req.body.description,
    image: fileName,
  };
  // // Handle file upload
  // if (req.file) {
  //    book.image = fileName;
  // }
  // Add book to the books array
  books.push(book);
  console.log("Added book:", JSON.stringify(book));
  // This line of code will save our file in public/images folder in our
  //appliction and will retrun err if any error found if no error found then return pathname of file.
  file.mv(`${__dirname}/public/images/${fileName}`, (err) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).send(book);
  });
});
//UPTO 

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
