const mongoose = require("mongoose");

mongoose
  .connect(
    process.env.MONGODB_URI ||
      "mongodb+srv://calendar:calendar@cluster0.a85ct.mongodb.net/calendar",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    },
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));
