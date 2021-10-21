const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://calendar:calendar@cluster0.a85ct.mongodb.net/calendar', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
