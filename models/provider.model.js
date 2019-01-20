const mongoose = require('mongoose');
const _ = require('lodash');

let ProviderSchema = new mongoose.Schema({
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
    provider_id: {
        type: String,
        default: '',
        required: true
    },
    phone: {
        type: String,
        default: '',
    }
});

const Provider = module.exports = mongoose.model('Provider', ProviderSchema);

module.exports.addProvider = function (providerInfo) {
    return new Promise(function (resolve, reject) {
        const {name, address, email, id, phone} = providerInfo;
        if (_.isNil(name) || _.isNil(address) || _.isNil(email) || _.isNil(id) || _.isNil(phone)) {
            reject(new Error('Provider name, address, id, phone, or email is missing.'));
        } else {
            Provider.create({
                name: name,
                address: address,
                email: email,
                provider_id: id,
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

module.exports.getProviderById = async function (providerID) {
    return await Provider.findOne({_id: providerID});
};
