import pessoaRoute from './pessoaRoute';
import usuarioRoute from './usuarioRoute';
import orcamentoRoute from './orcamentoRoute';

function Routes(app) {
  pessoaRoute(app);
  usuarioRoute(app);
  orcamentoRoute(app);
}

export default Routes;
