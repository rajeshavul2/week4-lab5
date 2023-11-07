const connectDB = require("./config/db");
const express = require("express");

// express app
const app = express();
connectDB();

// Import the controllers
const {
  getPhonebooks,
  createPhonebook,
  getPhonebook,
  deletePhonebook,
  patchPhonebook,
  putPhonebook,
} = require("./controllers/phonebookControllers.js");

// middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => res.send("API Running!"));
// GET a single blog
app.get("/api/phonebooks/:id", getPhonebook);
// DELETE a blog
app.delete("/api/phonebooks/:id", deletePhonebook);
// Update blog using PATCH
app.patch("/api/phonebooks/:id", patchPhonebook);
// Update blog using PUT
app.put("/api/phonebooks/:id", putPhonebook);
// Add a new blog
app.post("/api/phonebooks", createPhonebook);
// GET all blogs
app.get("/api/phonebooks", getPhonebooks);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});