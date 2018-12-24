exports.post = (request, response, next) => {
  response.status(201).send('Requisição recebida com sucesso')
};

exports.put => (request, response, next) => {
  let id = request.params.id;
  response.status(201).send(`Requisição recebida com sucesso ${id}`)
};


exports.delete = (request, response, next) => {
  let id = request.params.id;
  response.status(200).send(`Requisição recebida com sucesso ${id}`)
};

