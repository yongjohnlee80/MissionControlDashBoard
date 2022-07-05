const planets = require('../../models/planets.model');

function getAllPlanets(req, res) {
    return res.status(200).json(planets); // return value actually not used by express.
}
module.exports = {
    getAllPlanets,
};