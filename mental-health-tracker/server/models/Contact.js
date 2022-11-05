const mongoose = require("mongoose");
const dateFormat = require("../utils/dateFormat");
const { Schema } = mongoose;

const contactSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: false,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
