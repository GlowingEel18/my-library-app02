const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000; // Render will set process.env.PORT

app.use(cors()); // Enable CORS for all routes
app.use(express.static('public')); // Serve static files if needed

app.get("/", (req,res) => {
  res.sendFile(__dirname + "/index.html");
});

// Sample data route
app.get('/api/books', (req, res) => {
  const books = [
    { _id: '1', title: 'The Great Gatsby', description: 'A classic novel by F. Scott Fitzgerald' },
    { _id: '2', title: 'To Kill a Mockingbird', description: 'A novel by Harper Lee' },
    { _id: '3', title: '1984', description: 'A dystopian novel by George Orwell' },
    { _id: '4', title: 'Pride and Prejudice', description: 'A romance novel by Jane Austen' },
    { _id: '5', title: 'Moby-Dick', description: 'A novel by Herman Melville about a captain’s obsession with a white whale' },
    { _id: '6', title: 'War and Peace', description: 'A historical novel by Leo Tolstoy' },
    { _id: '7', title: 'Crime and Punishment', description: 'A psychological novel by Fyodor Dostoevsky' },
    { _id: '8', title: 'The Catcher in the Rye', description: 'A novel by J.D. Salinger about teenage rebellion' },
    { _id: '9', title: 'The Hobbit', description: 'A fantasy novel by J.R.R. Tolkien' },
    { _id: '10', title: 'The Brothers Karamazov', description: 'A philosophical novel by Fyodor Dostoevsky' },
    { _id: '11', title: 'Brave New World', description: 'A dystopian novel by Aldous Huxley' },
    { _id: '12', title: 'The Odyssey', description: 'An ancient Greek epic poem attributed to Homer' },
    { _id: '13', title: 'Ulysses', description: 'A novel by James Joyce about a day in the life of Dublin' },
    { _id: '14', title: 'One Hundred Years of Solitude', description: 'A magical realism novel by Gabriel Garcia Marquez' },
    { _id: '15', title: 'The Divine Comedy', description: 'An epic poem by Dante Alighieri about a journey through the afterlife' },
    { _id: '16', title: 'Frankenstein', description: 'A Gothic novel by Mary Shelley' },
    { _id: '17', title: 'Anna Karenina', description: 'A novel by Leo Tolstoy about love and society' },
    { _id: '18', title: 'The Iliad', description: 'An epic Greek poem attributed to Homer' },
    { _id: '19', title: 'Don Quixote', description: 'A novel by Miguel de Cervantes about an eccentric knight' },
    { _id: '20', title: 'The Sun Also Rises', description: 'A novel by Ernest Hemingway about the Lost Generation' }
  ];
  res.json(books);
});

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Library Webpage API!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
