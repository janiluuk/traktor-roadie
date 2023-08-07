const http = require('http');
const fs = require('fs');
'use strict';

const express = require('express');
// Create an empty array to store received data
let receivedData = [];
const app = express();

// Create an HTTP server
app.post('/', (req, res) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);

  if (req.method === 'GET') {
    // Serve the HTML page
    fs.readFile('index.html', 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Error reading file');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  } else if (req.method === 'POST' && req.headers['content-type'] === 'application/json') {
    let data = '';

    // Receive JSON data
    req.on('data', (chunk) => {
      data += chunk;
    });

    // Process received JSON data
    req.on('end', () => {
      const jsonData = JSON.parse(data);

      // Push the received data to the array
      receivedData.push(jsonData);

      // Print the received data to the console
      console.log('Received data:', jsonData);

      res.writeHead(200);
      res.end('Data received successfully');
    });
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

const loadedDecks = [];

// Connect to the Traktor software


// Start the server and listen on port 8080
app.listen(8080, 'localhost', () => {
  console.log('Server listening on http://localhost:8080');
});
  