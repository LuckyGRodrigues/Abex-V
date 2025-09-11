import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';

const Usuario = sequelize.define(
  'usuario',
  {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      field: 'nome',
      type: DataTypes.STRING,
    },
    descricaoProduto: {
      field: 'descricao_produto',
      type: DataTypes.STRING,
    },
    valor: {
      field: 'valor',
      type: DataTypes.DOUBLE,
    },
    imagem: {
      field: 'imagem',
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

export default Usuario;

// Produto.belongsTo(Categoria, {
//   as: 'categoria',
//   onDelete: 'no action',
//   onUpdate: 'no action',
//   foreignKey: {
//     name: 'idCategoria',
//     allowNull: false,
//     field: 'id_categoria',
//   },
// });
