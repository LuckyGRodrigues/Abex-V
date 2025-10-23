import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import Pessoa from './PessoaModel';

const Orcamento = sequelize.define(
  'orcamento',
  {
    id: {
      field: 'id_orcamento',
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    descricao: {
      field: 'descricao',
      type: DataTypes.STRING,
      allowNull: false,
    },
    valorEstimado: {
      field: 'valor_estimado',
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    data: {
      field: 'data_criacao',
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      field: 'status',
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

Orcamento.belongsTo(Pessoa, {
  as: 'pessoa',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    name: 'idPessoa',
    allowNull: false,
    field: 'id_pessoa',
  },
});

export default Orcamento;
