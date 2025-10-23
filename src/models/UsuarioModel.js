import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import Pessoa from './PessoaModel';

const Usuario = sequelize.define(
  'usuario',
  {
    id: {
      field: 'id_usuario',
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      field: 'nome',
      type: DataTypes.STRING,
    },
    email: {
      field: 'email',
      type: DataTypes.STRING,
    },
    senha: {
      field: 'senha',
      type: DataTypes.STRING,
    },
    tipo: {
      field: 'tipo',
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

Usuario.belongsTo(Pessoa, {
  as: 'pessoa',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    name: 'idPessoa',
    allowNull: false,
    field: 'id_pessoa',
  },
});

export default Usuario;
