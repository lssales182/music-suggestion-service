
const weatherService = require('../services/weatherService');

exports.getPlaylistByCity = async (req, res) => {
  try {
    const city = req.query.city;
    const playlist = await weatherService.getPlaylistByCity(city);
    res.status(200).json(playlist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
            