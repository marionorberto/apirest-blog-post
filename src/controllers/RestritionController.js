import Restrition from '../models/Restrition';
class RestritionController {
  async index(req, res) {
    return res.send('ok');
  }

  async store(req, res) {
    try {
      const restrition = await Restrition.create(req.body);
      return res.status(200).json(restrition);
    } catch (err) {
      console.log(err);
      return console.log('erro no controller');
    }
  }
}

export default new RestritionController();
