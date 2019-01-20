const mongoose = require('mongoose');
const _ = require('lodash');

let RequesterSchema = new mongoose.Schema({
    name: {
        type: String,
        default: ''
    },
    address: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: '',
        required: true
    },
    requester_id: {
        type: String,
        default: '',
        required: true
    },
    phone: {
        type: String,
        default: '',
    }
});

const Requester = module.exports = mongoose.model('Requester', RequesterSchema);

module.exports.add = function (requesterInfo) {
    return new Promise(function (resolve, reject) {
        const {name, address, email, id, phone} = requesterInfo;
        if (_.isNil(name) || _.isNil(address) || _.isNil(email) || _.isNil(id) || _.isNil(phone)) {
            reject(new Error('Requester name, address, id, phone, or email is missing.'));
        } else {
            Requester.create({
                name: name,
                address: address,
                email: email,
                requester_id: id,
                phone: phone
            }, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    // New Provider added to database!
                    resolve();
                }
            });
        }
    });
};

module.exports.getById = function (requesterID) {
    return Requester.findOne({requester_id: requesterID});
};
