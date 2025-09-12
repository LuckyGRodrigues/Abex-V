import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';

const Pessoa = sequelize.define(
  'pessoa',
  {
    id: {
      field: 'id_pessoa',
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
    telefone: {
      field: 'telefone',
      type: DataTypes.STRING,
    },
    empresa: {
      field: 'empresa',
      type: DataTypes.STRING,
    },
    cidade: {
      field: 'cidade',
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

export default Pessoa;
