const Phonebook = require("../models/myModel.js");

// Create a new blog
const createPhonebook = async (req, res) => {
  try {
    const { name, phoneNumber, email, address } = req.body;
    if (!name || !phoneNumber || !email || !address) {
      return res
        .status(400)
        .json({ error: "All fields (name, phoneNumber, email, address) are required" });
    }

    const newPhonebook = new Phonebook({ name, phoneNumber, email, address });
    const savedPhonebook = await newPhonebook.save();

    res.status(201).json(savedPhonebook);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// GET all blogs
const getPhonebooks = async (req, res) => {
  try {
    const phonebooks = await Phonebook.find();
    res.json(phonebooks);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// GET a single blog by ID
const getPhonebook = async (req, res) => {
  try {
    const phonebook = await Phonebook.findById(req.params.id);
    if (!phonebook) {
      return res.status(404).json({ error: "Blog not found" });
    }
    res.json(phonebook);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// DELETE a blog by ID
const deletePhonebook = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!phonebook) {
      return res.status(404).json({ error: "Phonebook not found" });
    }
    res.json({ message: "Phonebook deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update (Patch) a single blog by ID
const patchPhonebook = async (req, res) => {
  try {
    const phonebook = await Phonebook.findOneAndReplace(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    if (!phonebook) {
      return res.status(404).json({ error: "Phonebook not found" });
    }

    res.json(phonebook);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Replace (Put) a single blog by ID
const putPhonebook = async (req, res) => {
  try {
    const phonebook = await Phonebook.findOneAndReplace(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    if (!phonebook) {
      return res.status(404).json({ error: "Phonebook not found" });
    }

    res.json(phonebook);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createPhonebook,
  getPhonebooks,
  getPhonebook,
  deletePhonebook,
  patchPhonebook,
  putPhonebook,
};