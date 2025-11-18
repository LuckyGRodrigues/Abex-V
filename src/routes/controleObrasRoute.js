import controller from '../controllers/controleObrasController';

export default (app) => {
  app.get('/controle-obras', controller.get);
  app.get('/controle-obras/:id', controller.get);
  app.post('/controle-obras/create', controller.create);
  app.patch('/controle-obras/update/:id', controller.update);
  app.delete('/controle-obras/delete/:id', controller.destroy);
};
