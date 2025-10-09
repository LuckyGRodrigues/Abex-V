import controller from '../controllers/orcamentoController';

export default (app) => {
  app.get('/orcamento', controller.get);
  app.get('/orcamento/:id', controller.get);
  app.post('/orcamento/create', controller.create);
  app.patch('/orcamento/update/:id', controller.update);
  app.delete('/orcamento/delete/:id', controller.destroy);
};
