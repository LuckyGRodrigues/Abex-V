import pessoaRoute from './pessoaRoute';
import usuarioRoute from './usuarioRoute';
import orcamentoRoute from './orcamentoRoute';
import controleObrasRoute from './controleObrasRoute';
import financeiro from './financeiroRoute';

function Routes(app) {
  pessoaRoute(app);
  usuarioRoute(app);
  orcamentoRoute(app);
  controleObrasRoute(app);
  financeiro(app);
}

export default Routes;
