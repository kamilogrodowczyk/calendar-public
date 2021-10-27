const mongoose = require("mongoose");

mongoose
  .connect(
    process.env.MONGODB_URI ||
      "mongodb+srv://calendar-public:calendar-public@cluster-public.9wnvc.mongodb.net/calendar-public",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    },
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));
