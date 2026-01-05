const express = require('express');
const router = express.Router();
const stud = require('../models/new_reco'); 


router.post('/delete-multiple', async (req, res) => {
    const ids = req.body.ids; // array of selected IDs
    try {
        await stud.deleteMany({ _id: { $in: ids } });
        res.redirect('/');
    } catch (err) {
        res.status(500).send('Error deleting records');
    }
});

module.exports = router;