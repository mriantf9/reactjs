const mongoose = require('mongoose');
const hgCheckSchema = new mongoose.Schema({

    rel_id: {
        type: String
    },
    jobs_id_rel: {
        type: String
    },
    ipd_id_rel: {
        type: String
    }
})

module.exports = mongoose.model('HgCheck', hgCheckSchema);