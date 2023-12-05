import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import { fileURLToPath } from 'url'; 
import { dirname, join } from 'path'; 

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);

app.get('/', (req, res) => {
  res.sendFile(join(_dirname, 'index.html'));
});

app.get('/search', async (req, res) => {
  try {
    const name = req.query.name;
    const response = await fetch(`https://anime-search-8ri2.onrender.com/search-anime?name=${name}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
// import express from 'express';
// import cors from 'cors';
// import fetch from 'node-fetch';
// import { fileURLToPath } from 'url';
// import { dirname, join } from 'path';

// const app = express();
// const port = process.env.PORT || 3000;

// // Middleware to set CORS headers
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
//   next();
// });

// // Other middleware and routes

// // Calculate __dirname using import.meta.url
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// // Serve static files from the 'public' directory
// app.use(express.static(join(__dirname, 'public'), { index: false, extensions: ['html'] }));

// app.get('/', (req, res) => {
//   // Send the 'index.html' file
//   res.sendFile(join(__dirname, 'public', 'index.html'));
// });

// app.get('/random', async (req, res) => {
//   try {
//     const response = await fetch('https://anime-search-8ri2.onrender.com/random');
//     const data = await response.json();
//     res.json(data);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });
