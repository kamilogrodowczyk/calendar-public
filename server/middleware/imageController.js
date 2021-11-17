const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");

const Event = require("../models/event");

const s3 = new aws.S3({
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  region: process.env.S3_BUCKET_REGION,
});

exports.upload = (bucketName) =>
  multer({
    storage: multerS3({
      s3,
      bucket: bucketName,
      metadata: function (req, file, cb) {
        cb(null, { fieldName: file.fieldname });
      },
      key: function (req, file, cb) {
        cb(null, `image-${Date.now()}.jpeg`);
      },
    }),
  });

exports.setProfilePic = (req, res, next) => {
  const uploadSingle = upload("calendar-public").single("image");

  uploadSingle(req, res, async (err) => {
    if (err) return res.status(400).json({ success: false, message: err });
    const formattedDateToSort = req.params.formattedDateToSort;
    console.log(formattedDateToSort, req.files);
    // await Event.create({ image: req.file.location });
    // const eventElements = await Event.updateOne(
    //   { formattedDateToSort: formattedDateToSort },
    //   { $set: { image: req.file.location } },
    // );
    // res.json(eventElements);
    // res.status(200).json({ data: req.file.location });
  });
};
// exports.setProfilePic = (req, res, next) => {
//   uploadSingle(req, res, async (err) => {
//     if (err) return res.status(400).json({ success: false, message: err });
//     await Event.create({ image: req.file.location });
//   });
// };
