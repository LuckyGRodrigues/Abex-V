import pessoaRoute from './pessoaRoute';
import usuarioRoute from './usuarioRoute';
import orcamentoRoute from './orcamentoRoute';
import controleObrasRoute from './controleObrasRoute';

function Routes(app) {
  pessoaRoute(app);
  usuarioRoute(app);
  orcamentoRoute(app);
  controleObrasRoute(app);
}

export default Routes;
