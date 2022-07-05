const {getAllPlanets} = require('../../models/planets.model');

function httpGetAllPlanets(req, res) {
    return res.status(200).json(getAllPlanets()); // return value actually not used by express.
}
module.exports = {
    httpGetAllPlanets,
};