class UserController {
  index(request, response) {
    response.send({
      state: 'ok',
    });
  }

  store(request, response) {
    response.send({
      state: 'ok',
    });
  }

  show(request, response) {
    response.send({
      state: 'ok',
    });
  }

  update(request, response) {
    response.send({
      state: 'ok',
    });
  }

  delete(request, response) {
    response.send({
      state: 'ok',
    });
  }
}

export default new UserController();
