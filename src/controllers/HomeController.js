class HomeController {
  index(request, response) {
    response.status(200).json(
      'APIREST BLOGPOST',
    );
  }
}

export default new HomeController();
