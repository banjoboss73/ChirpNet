const app = require('./app');

const port = process.env.PORT || 8080; // Use the specified port

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
