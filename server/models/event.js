const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  time: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  comment: {
    type: String,
    trim: true,
  },
  activeUser: {
    type: String,
    trim: true,
  },
  company: {
    type: String,
    trim: true,
  },
  creationDate: {
    type: String,
    trim: true,
  },
  creationHour: {
    type: String,
    trim: true,
  },
  day: {
    type: String,
    trim: true,
  },
  eventDate: {
    type: String,
    trim: true,
  },
  image: {
    data: Buffer,
    type: String,
  },
  formattedDateToSort: {
    type: String,
    trim: true,
  },
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
