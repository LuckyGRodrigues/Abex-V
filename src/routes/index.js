import pessoaRoute from './pessoaRoute';
import usuarioRoute from './usuarioRoute';

function Routes(app) {
  pessoaRoute(app);
  usuarioRoute(app);
}

export default Routes;
