require('dotenv').config();
const HgCheck = require('../models/hgcheck.model');


exports.JobsHg = async (req, res) => {
    const { sUsername, sENM, sNode } = req.body;

    const hgCheck = new HgCheck({
        rel_id: sUsername,

    })
}
