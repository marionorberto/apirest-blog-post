import User from '../models/User';
class UserController {
  async index(req, res) {
    try {
      const users = await User.findAll();
      if (!users) return res.status(400).json(null);
      return res.status(200).json(users);
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  }

  async store(req, res) {
    try {
      console.log(req.body);
      const user = await User.create(req.body);
      return res.status(200).json(user);
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  }

  async show(req, res) {
    try {
      if (!req.params.id) return res.status(400).json('id is required!');
      const user = await User.findByPk(req.params.id);

      if (!user) return res.status(400).json(null);
      return res.status(200).json(user);
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  }

  async update(req, res) {
    try {
      if (!req.params.id) return res.status(400).json('id is required!');
      const user = await User.findByPk(req.params.id);

      if (!user) return res.status(400).json(null);
      const userUpdated = await user.update(req.body);
      return res.status(200).json(userUpdated);
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  }

  async delete(req, res) {
    try {
      if (!req.params.id) return res.status(400).json('id is required!');
      const user = await User.findByPk(req.params.id);

      if (!user) return res.status(400).json(null);
      await user.destroy();
      return res.status(200).json('deleted');
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  }
}

export default new UserController();
