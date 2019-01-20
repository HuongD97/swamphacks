const express = require('express');
const router = express.Router();
const User = require('../src/User');
const Requester = require('../models/requester.model');
const pick = require('lodash/pick');

router.post('/create', async (req, res) => {
    let didAddToFirebase = false;
    try {
        const {email, password, phone, address, name} = req.body;
        const firebaseResult = await User.createUser(email, password);
        didAddToFirebase = true;
        const id = firebaseResult.user.uid;
        await Requester.add({email, phone, address, name, id});
        const requester = await Requester.getById(id);
        res.status(200).json({bankData: pick(requester, ['name', 'address', 'email', 'requester_id', 'phone'])});
    } catch (e) {
        console.log('e', e);
        if (didAddToFirebase) {
            await User.deleteUser();
        }
        res.status(500).send(e);
    }
});


module.exports = router;
