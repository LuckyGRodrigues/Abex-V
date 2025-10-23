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
    cpfCnpj: {
      field: 'cpf_cnpj',
      type: DataTypes.STRING(18),
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
      },
    },
    nome: {
      field: 'nome',
      type: DataTypes.STRING(100),
      allowNull: false,
<<<<<<< Updated upstream
=======
      validate: {
        notEmpty: true,
      },
>>>>>>> Stashed changes
    },
    email: {
      field: 'email',
      type: DataTypes.STRING(100),
<<<<<<< Updated upstream
      allowNull: true,
=======
>>>>>>> Stashed changes
    },
    telefone: {
      field: 'telefone',
      type: DataTypes.STRING(20),
<<<<<<< Updated upstream
      allowNull: true,
=======
>>>>>>> Stashed changes
    },
    empresa: {
      field: 'empresa',
      type: DataTypes.STRING(100),
<<<<<<< Updated upstream
      allowNull: true,
=======
>>>>>>> Stashed changes
    },
    cidade: {
      field: 'cidade',
      type: DataTypes.STRING(50),
<<<<<<< Updated upstream
      allowNull: true,
    },
    tipo: {
      field: 'tipo',
      type: DataTypes.ENUM('Cliente', 'Colaborador', 'Fornecedor'),
      allowNull: false,
=======
    },
    tipo: {
      field: 'tipo',
      type: DataTypes.STRING(20),
      allowNull: false,
      validate: {
        isIn: [['Cliente', 'Colaborador', 'Fornecedor']],
      },
>>>>>>> Stashed changes
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

export default Pessoa;
