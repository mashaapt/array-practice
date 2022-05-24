const Profile = require('../models/profile');

exports.getProfiles = async(req, res) => {
  const profiles = await Profile.find();
  res.status(201).json({profiles});
}

exports.postProfile = async(req, res) => {
  const { name } = req.body;

  const imagePaths = [];

  req.files.forEach(file => {
    const imagePath = 'http://localhost:3000/images/' +file.filename;
    imagePaths.push(imagePath);
  });

  //set path dynamically
  const profile = new Profile({
    name,
    imagePaths
  });
  
  const createdProfile = await profile.save();
  res.status(201).json({
    profile: {
      ...createdProfile._doc
    }
  })
}