import controller from '../controllers/usuarioController';

export default (app) => {
  app.get('/usuario', controller.get);
  app.get('/usuario/:id', controller.get);
  app.post('/usuario/create', controller.create);
  app.patch('/usuario/update/:id', controller.update);
  app.delete('/usuario/delete/:id', controller.destroy);
};
