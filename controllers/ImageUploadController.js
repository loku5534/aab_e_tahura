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
};
