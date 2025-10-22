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
      allowNull: false,
    },
    cpf_cnpj: {
      field: 'cpf_cnpj',
      type: DataTypes.STRING(18),
      allowNull: false,
      unique: true,
    },
    nome: {
      field: 'nome',
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      field: 'email',
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    telefone: {
      field: 'telefone',
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    empresa: {
      field: 'empresa',
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    cidade: {
      field: 'cidade',
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    tipo: {
      field: 'tipo',
      type: DataTypes.ENUM('Cliente', 'Colaborador', 'Fornecedor'),
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

export default Pessoa;
