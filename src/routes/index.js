import categoriaRoute from './categoriaRoute';
import pedidoRoute from './pedidoRoute';
import produtoRoute from './produtoRoute';
import tokenRoute from './tokenRoute';
import comandaRoute from './comandaRoute';

function Routes(app) {
  categoriaRoute(app);
  tokenRoute(app);
  produtoRoute(app);
  pedidoRoute(app);
  comandaRoute(app);
}

export default Routes;
