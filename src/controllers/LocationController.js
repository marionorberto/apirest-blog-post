import Location from '../models/Location';
class LocationController {
  async index(req, res) {
    return res.send('ok');
  }

  async store(req, res) {
    try {
      const location = await Location.create(req.body);
      return res.status(200).json(location);
    } catch (err) {
      console.log(err);
      return console.log('erro no controller');
    }
  }
}

export default new LocationController();
