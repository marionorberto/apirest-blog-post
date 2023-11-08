import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';
import User from '../models/User';

require('dotenv').config();
class TokenController {
  async store(req, res) {
    try {
      const { email, password } = req.body;
      if (!email || !password) return res.status(400).json('email and password are missing');

      const user = await User.findOne({ where: { email } });

      if (!user) return res.status(400).json('invalid email');

      if (!(await bcryptjs.compare(password, user.password_hash))) {
        return res.status(400).json('password invalid');
      }
      const { id } = user;
      const token = jwt.sign(
        { id, email },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRATION },
      );
      return res.status(200).json({ token });
    } catch (err) {
      return res.status(400).json({
        errors: 'token invalid',
      });
    }
  }
}

export default new TokenController();
