import Post from '../models/Post';
class PostController {
  async index(req, res) {
    try {
      const posts = await Post.findAll();

      if (posts.length <= 0) return null;

      return res.status(200).json(posts);
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  }

  async store(req, res) {
    try {
      if (req.body <= 0) return res.status(400).json('missing body object');

      const post = await Post.create(req.body);
      return res.status(400).json(post);
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  }

  async show(req, res) {
    try {
      if (!req.params.id) return res.status(400).json('id is required');

      const post = await Post.findByPk(req.params.id);
      return res.status(200).json(post);
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  }

  async update(req, res) {
    try {
      if (!req.params.id) return res.status(400).json('id is required');

      const post = await Post.findByPk(req.params.id);
      if (!post) return res.status(400).json(null);

      const postUpdated = await post.updated(req.body);

      return res.status(200).json(postUpdated);
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  }

  async delete(req, res) {
    try {
      if (!req.params.id) return res.status(400).json('id is required');

      const post = await Post.finfByPk(req.params.id);
      if (!post) return res.status(400).json(null);

      await post.destroy();
      return res.status(200).json('deleted');
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  }
}

export default new PostController();
