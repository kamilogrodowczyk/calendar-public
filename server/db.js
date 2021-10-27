const mongoose = require("mongoose");
const mongodbVariable = process.env.MONGODB_URI;

const config = {
  useNewUrlParser: true,
  ...(mongodbVariable === undefined && { useCreateIndex: true }),
  useUnifiedTopology: true,
};

mongoose
  .connect(
    mongodbVariable ||
      "mongodb+srv://calendar-public:calendar-public@cluster-public.9wnvc.mongodb.net/calendar-public",
    config,
  )
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));
