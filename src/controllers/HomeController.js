class HomeController {
  index(request, response) {
    response.send('Home Index');
  }

  store(request, response) {
    response.send('Home store');
  }

  show(request, response) {
    response.send('Home show');
  }

  update(request, response) {
    response.send('Home update');
  }

  delete(request, response) {
    response.send('Home delete');
  }
}

export default new HomeController();
