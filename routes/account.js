const express = require('express');
const router = express.Router();
const User = require('../src/User');

router.post('/signIn', async (req, res) => {
    try {
        const {email, password} = req.body;
        const result = await User.signIn(email, password);
        res.json(result);
    } catch (e) {
        console.log('Error:', e);
        res.status(500).send('An error occurred on the server. Check server log for more info.');
    }
});

router.post('/getCurrentSignedInAccount', (req, res) => {
    try {
        User.getCurrentUser((err, user) => {
            if (err) {
                throw err;
            } else {
                res.json(user);
            }
        });
    } catch (e) {
        console.log('Error:', e);
        res.status(500).send('An error occurred on the server. Check server log for more info.');
    }

});
router.post('/createAccount', async (req, res) => {
    try {
        const {email, password} = req.body;
        const result = await User.createUser(email, password);
        res.json(result);
    } catch (e) {
        console.log('Error:', e);
        res.status(500).send('An error occurred on the server. Check server log for more info.');
    }
});

module.exports = router;
