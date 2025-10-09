import controller from '../controllers/pessoaController';

export default (app) => {
  app.get('/pessoa', controller.get);
  app.get('/pessoa/:id', controller.get);
  app.post('/pessoa/create', controller.create);
  app.patch('/pessoa/update/:id', controller.update);
  app.delete('/pessoa/delete/:id', controller.destroy);
};
