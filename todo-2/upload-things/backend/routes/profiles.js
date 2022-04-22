const express = require('express');

// controller
const profilesController = require('../controllers/profiles');

//storage
const storage = require('../helpers/storage');

const router = express.Router();

// router.get('/', profiles)
router.get('/', profilesController.getProfiles);

router.post('/', storage, profilesController.postProfile);

module.export = router;