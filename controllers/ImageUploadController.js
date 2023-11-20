const AWS = require("aws-sdk");
const fs = require("fs");

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_S3_ACCESS_KEY,
  secretAccessKey: process.env.AWS_S3_SECRET_KEY,
});

const uploadImageToS3 = async (req, res) => {
  try {
    const fileName =
      Date.now().toString() + "." + req.file.mimetype.split("/")[1];

    const uploadedImage = await s3
      .upload({
        Bucket: process.env.AWS_S3_BUCKET_NAME,
        Key: fileName,
        Body: req.file.buffer,
      })
      .promise();

    return res.status(200).json({
      imageName: fileName,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error: "Could not upload image to s3!",
    });
  }
};

const uploadImage = (req, res) => {
  try {
    return res.status(200).json({
      imageURI: req.file.filename,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error: "Could not upload image!",
    });
  }
};

module.exports = {
  uploadImage,
  uploadImageToS3,
};
