const mongoose = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const { Schema } = mongoose;

const responseSchema = new Schema({
  depressionScale: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  happyScale: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  anxiousScale: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  irritableScale: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  energeticScale: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  appetiteScale: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  sleepHours: {
    type: Number,
    required: true,
    min: 0,
    max: 24,
  },
  medicationCheck: {
    type: String,
    required: true,
    enum: ["Yes", "No"],
  },
  notesCheck: {
    type: String,
    required: false,
    minLength: 0,
    maxLength: 180,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

const Response = mongoose.model("Response", responseSchema);

module.exports = Response;
