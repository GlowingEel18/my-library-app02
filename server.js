const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const path = require("path");
const Joi = require("joi"); // Import Joi for validation

const app = express();
const PORT = process.env.PORT || 3001;

// Enable middleware
app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/uploads', express.static(path.join(__dirname, 'client/public/uploads')));

// Sample book data with all 45 books
const books = [
  { id: 1, title: "1984", description: "A dystopian novel by George Orwell.", image_url: "/images/1984.jpg" },
  { id: 2, title: "Andromeda", description: "A science fiction novel.", image_url: "/images/Andromeda.jpg" },
  { id: 3, title: "Angels & Demons", description: "A thriller by Dan Brown.", image_url: "/images/Angels&Demons.jpg" },
  { id: 4, title: "Becoming", description: "A memoir by Michelle Obama.", image_url: "/images/Becoming.jpg" },
  { id: 5, title: "Big Little Lies", description: "A mystery novel by Liane Moriarty.", image_url: "/images/BigLittleLies.jpg" },
  { id: 6, title: "Desire", description: "A captivating romance novel.", image_url: "/images/Desire.jpg" },
  { id: 7, title: "Dracula", description: "A horror classic by Bram Stoker.", image_url: "/images/Dracula.jpg" },
  { id: 8, title: "Drama", description: "An emotional story about relationships.", image_url: "/images/Drama.jpg" },
  { id: 9, title: "Dune", description: "A sci-fi epic by Frank Herbert.", image_url: "/images/Dune.jpg" },
  { id: 10, title: "Educated", description: "A memoir by Tara Westover.", image_url: "/images/Educated.jpg" },
  { id: 11, title: "Enchanted Forest", description: "A fantasy adventure novel.", image_url: "/images/EnchantedForest.jpg" },
  { id: 12, title: "Fahrenheit 451", description: "A dystopian novel by Ray Bradbury.", image_url: "/images/Fahrenheit.jpg" },
  { id: 13, title: "Fantasy", description: "An imaginative story set in another world.", image_url: "/images/Fantasy.jpg" },
  { id: 14, title: "Fiction 2", description: "A captivating fictional story.", image_url: "/images/Fiction2.jpg" },
  { id: 15, title: "Foundation", description: "A sci-fi classic by Isaac Asimov.", image_url: "/images/Foundation.jpg" },
  { id: 16, title: "Frankenstein", description: "A gothic horror story by Mary Shelley.", image_url: "/images/Frankenstein.jpg" },
  { id: 17, title: "Gory Details", description: "A collection of intriguing stories.", image_url: "/images/GoryDetails.jpg" },
  { id: 18, title: "The Great Gatsby", description: "A classic novel by F. Scott Fitzgerald.", image_url: "/images/GreatGatsby.jpg" },
  { id: 19, title: "Hamlet", description: "A tragedy by William Shakespeare.", image_url: "/images/Hamlet.jpg" },
  { id: 20, title: "Harry Potter and the Throne", description: "A magical adventure.", image_url: "/images/HarryPotterThrone.jpg" },
  { id: 21, title: "Horror", description: "A collection of spine-chilling tales.", image_url: "/images/Horror.jpg" },
  { id: 22, title: "The Hound of the Baskervilles", description: "A Sherlock Holmes mystery by Arthur Conan Doyle.", image_url: "/images/Hound.jpg" },
  { id: 23, title: "Humankind", description: "A book about human nature by Rutger Bregman.", image_url: "/images/Humankind.jpg" },
  { id: 24, title: "Ice & Fire", description: "A tale of intrigue and power.", image_url: "/images/Ice&Fire.jpg" },
  { id: 25, title: "Me Before You", description: "A romantic drama by Jojo Moyes.", image_url: "/images/MeBeforeYou.jpg" },
  { id: 26, title: "Mystery", description: "A gripping tale full of suspense.", image_url: "/images/Mystery.jpg" },
  { id: 27, title: "Neuromancer", description: "A cyberpunk novel by William Gibson.", image_url: "/images/Neuromancer.jpg" },
  { id: 28, title: "New Novels", description: "A collection of contemporary fiction.", image_url: "/images/NewNovels.jpg" },
  { id: 29, title: "Non-Fiction 2", description: "An insightful look into real events.", image_url: "/images/NonFiction2.jpg" },
  { id: 30, title: "The Periodic Table", description: "A novel by Primo Levi.", image_url: "/images/PeriodicTables.jpg" },
  { id: 31, title: "Pride and Prejudice", description: "A classic romance by Jane Austen.", image_url: "/images/Prejudice.jpg" },
  { id: 32, title: "Romance", description: "A love story full of twists.", image_url: "/images/Romance.jpg" },
  { id: 33, title: "Death of a Salesman", description: "A play by Arthur Miller.", image_url: "/images/Salesman.jpg" },
  { id: 34, title: "Sci-Fi", description: "An imaginative science fiction tale.", image_url: "/images/Sci-Fi.jpg" },
  { id: 35, title: "Scientific Mystery", description: "A suspenseful scientific adventure.", image_url: "/images/ScientificMystery.jpg" },
  { id: 36, title: "Shadow", description: "A tale of secrets and betrayal.", image_url: "/images/Shadow.jpg" },
  { id: 37, title: "The Silent Observer", description: "A story of quiet courage.", image_url: "/images/SilentObserver.jpg" },
  { id: 38, title: "The Silent Patient", description: "A thriller by Alex Michaelides.", image_url: "/images/SilentPatient.jpg" },
  { id: 39, title: "Strange Chemistry", description: "A science fiction novel.", image_url: "/images/StrangeChemistry.jpg" },
  { id: 40, title: "The Notebook", description: "A romance novel by Nicholas Sparks.", image_url: "/images/TheNotebook.jpg" },
  { id: 41, title: "The Awakening", description: "A classic by Kate Chopin.", image_url: "/images/TheAwakening.jpg" },
  { id: 42, title: "The Shining", description: "A horror novel by Stephen King.", image_url: "/images/TheShining.jpg" },
  { id: 43, title: "The Silent Observer", description: "A gripping mystery novel.", image_url: "/images/TheSilentObserver.jpg" },
  { id: 44, title: "To Kill a Mockingbird", description: "A classic by Harper Lee.", image_url: "/images/TKAM.jpg" },
  { id: 45, title: "Whispers in the Wind", description: "A hauntingly beautiful story.", image_url: "/images/WhispersWind.jpg" },
];

// Joi schema for book validation
const bookSchema = Joi.object({
  title: Joi.string().min(3).required(),
  description: Joi.string().min(10).required(),
  image_url: Joi.string().uri().required(),
});

// GET endpoint to retrieve books
app.get("/api/books", (req, res) => {
  res.json(books);
});

// POST endpoint to add a new book with Joi validation
app.post("/api/books", (req, res) => {
  const { error } = bookSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const { title, description, image_url } = req.body;
  const newBook = {
    id: books.length + 1,
    title,
    description,
    image_url,
  };

  books.push(newBook);
  res.status(201).json(newBook);
});

// Hard-coded route for adding a single book (for testing purposes)
app.post("/api/books/hardcoded", (req, res) => {
  const hardCodedBook = {
    id: books.length + 1,
    title: "The Catcher in the Rye",
    description: "A classic novel by J.D. Salinger.",
    image_url: "/images/CatcherInTheRye.jpg",
  };

  const { error } = bookSchema.validate(hardCodedBook);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  books.push(hardCodedBook);
  res.status(201).json(hardCodedBook);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/api/books`);
});
