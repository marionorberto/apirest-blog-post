import Felling from '../models/Felling';
class FellingController {
  async index(req, res) {
    return res.send('ok');
  }

  async store(req, res) {
    try {
      const felling = await Felling.create(req.body);
      return res.status(200).json(felling);
    } catch (err) {
      console.log(err);
      return console.log('erro no controller');
    }
  }
}

export default new FellingController();
