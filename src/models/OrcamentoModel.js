import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';

const Orcamento = sequelize.define(
  'orcamento',
  {
    id_orcamento: {
      field: 'id_orcamento',
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    descricao: {
      field: 'descricao',
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    valor_estimado: {
      field: 'valor_estimado',
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    data: {
      field: 'data_criacao',
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    status: {
      field: 'status',
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
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

export default orcamento;
