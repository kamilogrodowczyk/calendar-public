const express = require("express");
const Event = require("../models/event");
const router = express.Router();
const imageController = require("../middleware/imageController");

router.post("/create-event", async (req, res, next) => {
  try {
    const newCompany = new Event(req.body);
    console.log(req.body);
    await newCompany.save();

    res.status(201).send(newCompany);
  } catch (e) {
    res.status(500).send("Something went wrong. Try again later");
  }
});

router.get("/event", async (req, res) => {
  try {
    const eventElements = await Event.find({});
    res.json({ eventElements });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.delete("/event/:formattedDateToSort", async (req, res) => {
  const formattedDateToSort = req.params.formattedDateToSort;
  let eventElements = await Event.find({});
  const deleted = eventElements.find(
    (element) => element.formattedDateToSort === formattedDateToSort,
  );
  if (!deleted) {
    return res
      .status(400)
      .send("Company with the provided name does not exist.");
  }

  try {
    await Event.deleteOne({ formattedDateToSort: formattedDateToSort });
    res.json({ eventElements });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.put("/event/:formattedDateToSort", async (req, res) => {
  const formattedDateToSort = req.params.formattedDateToSort;
  try {
    const eventElements = await Event.updateOne(
      { formattedDateToSort: formattedDateToSort },
      {
        $set: {
          title: req.body.title,
          time: req.body.time,
          description: req.body.description,
          comments: req.body.comments,
        },
      },
    );
    res.json(eventElements);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});
// router.put("/event/image/:formattedDateToSort", async (req, res) => {
//   const formattedDateToSort = req.params.formattedDateToSort;
//   try {
//     const eventElements = await Event.updateOne(
//       { formattedDateToSort: formattedDateToSort },
//       { $set: { image: req.body.image } },
//     );
//     res.json(eventElements);
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// });
router.put(
  "/event/image/:formattedDateToSort",
  imageController.upload("calendar-public").single("image"),
  async (req, res) => {
    // if (err) return res.status(400).json({ success: false, message: err });
    const formattedDateToSort = req.params.formattedDateToSort;
    console.log(formattedDateToSort, req.file.location);
    try {
      const eventElements = await Event.updateOne(
        { formattedDateToSort: formattedDateToSort },
        { $set: { image: req.file.location } },
      );
      res.json({ image: req.file.location });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
);

module.exports = router;
