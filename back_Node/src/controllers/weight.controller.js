const db = require('../models');
const weight = db.weight;

exports.createWeight = async (req, res) => {
    // console.log("test de la route createWeight");
    // res.send("test de la route pour createWeight");
    
}

exports.test = (req, res) => {
    console.log("route pour tester mon controller des weight");
    res.send("route pour tester mon controller des weight")
}