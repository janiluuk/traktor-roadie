const express = require('express');


const app = express();
const loadedDecks = [];

// Connect to the Traktor software

// Set up a route to handle the deckLoaded requests

app.post('/deckLoaded/:deck', (req, res) => {
  const { deck } = req.params;
  loadedDecks.push(deck);
  console.log(JSON.parse(res));
  // Send a response to acknowledge the request
  res.sendStatus(200);
});

// Set up a route to display the loaded decks as a table
app.get('/', (req, res) => {
  const tableRows = loadedDecks.map((deck, index) => `<tr><td>${index + 
1}</td><td>${deck}</td></tr>`).join('');
  const tableHTML = 
`<table><tr><th>#</th><th>Deck</th></tr>${tableRows}</table>`;

  res.send(`
    <html>
      <head>
        <style>
          table {
            border-collapse: collapse;
            width: 100%;
          }

          th, td {
            border: 1px solid black;
            padding: 8px;
            text-align: left;
          }
        </style>
      </head>
      <body>
        <h1>Loaded Decks</h1>
        ${tableHTML}
      </body>
    </html>
  `);
});

// Listen for any error events


// Gracefully disconnect from the Traktor software when done
process.on('SIGINT', () => {
  process.exit();
});

// Start the server
const port = 8080; // Choose the desired port number
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

