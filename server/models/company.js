const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  company: {
    type: String,
    unique: true,
  },
  modificatedName: {
    type: String,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Company = mongoose.model('Company', userSchema);

module.exports = Company;
