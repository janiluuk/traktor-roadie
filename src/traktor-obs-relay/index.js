const http = require('http');

// Create an empty array to store received 
data
let receivedData = [];

// Create an HTTP server
const server = http.createServer((req, res) 
=> {
  // Set the response header
  res.setHeader('Content-Type', 
'text/html');
  
  // Generate the HTML table with received 
data
  const table = generateTable(receivedData);

  // Send the HTML response
  res.end(table);
});

// Start the server and listen on port 8080
server.listen(8080, 'localhost', () => {
  console.log('Server listening on 
http://localhost:8080');
});

// Function to generate an HTML table from 
received data
function generateTable(data) {
  let tableHTML = '<table>';

  // Create the table headers
  tableHTML += '<tr>';
  for (const key in data[0]) {
    tableHTML += `<th>${key}</th>`;
  }
  tableHTML += '</tr>';

  // Populate the table with data rows
  data.forEach((row) => {
    tableHTML += '<tr>';
    for (const key in row) {
      tableHTML += `<td>${row[key]}</td>`;
    }
    tableHTML += '</tr>';
  });

  tableHTML += '</table>';

  return tableHTML;
}

// Simulate receiving data from Traktor
function receiveDataFromTraktor(data) {
  // Push the received data to the array
  receivedData.push(data);
  
  // Print the received data to the console
  console.log('Received data:', data);
}

// Example usage: Simulate receiving data 
every 2 seconds
setInterval(() => {
  const randomData = {
    title: 'Track Title',
    artist: 'Artist Name',
    album: 'Album Name'
  };

  receiveDataFromTraktor(randomData);
}, 2000);

