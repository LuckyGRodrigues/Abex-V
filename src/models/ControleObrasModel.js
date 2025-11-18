import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';

const ControleObras = sequelize.define(
  'controle_obras',
  {
    id: {
      field: 'id_controle',
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    idOrcamento: {
      field: 'id_orcamento',
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'orcamento', key: 'id_orcamento' },
    },
    dataRegistro: {
      field: 'data_registro',
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    horasTrabalhadas: {
      field: 'horas_trabalhadas',
      type: DataTypes.DECIMAL(5,2),
    },
    responsavel: {
      field: 'responsavel',
      type: DataTypes.INTEGER,
      references: { model: 'usuario', key: 'id_usuario' },
    },
    status: {
      field: 'status',
      type: DataTypes.STRING(20),
      defaultValue: 'Em andamento',
      validate: {
        isIn: [['Em andamento', 'Parado', 'Concluído', 'Cancelado']],
      },
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

export default ControleObras;
