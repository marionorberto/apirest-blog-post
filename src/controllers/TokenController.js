class TokenController {
  store(request, response) {
    response.send({
      state: 'ok',
    });
  }
}

export default new TokenController();
