import controller from '../controllers/finaceiroController';

export default (app) => {
  app.get('/financeiro', controller.get);
  app.get('/financeiro/:id', controller.get);
  app.post('/financeiro/create', controller.create);
  app.patch('/financeiro/update/:id', controller.update);
  app.delete('/financeiro/delete/:id', controller.destroy);
};
