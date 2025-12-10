import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import Pessoa from './PessoaModel';
import Usuario from './UsuarioModel';

const Financeiro = sequelize.define(
  'financeiro',
  {
    id: {
      field: 'id_financeiro',
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    tipo: {
      field: 'tipo',
      type: DataTypes.STRING(30),
      allowNull: false,
      validate: {
        isIn: [['Pagar', 'Receber']],
      },
    },
    descricao: {
      field: 'descricao',
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    valor: {
      field: 'valor',
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    dataVencimento: {
      field: 'data_vencimento',
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    dataBaixa: {
      field: 'data_baixa',
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    status: {
      field: 'status',
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: 'Pendente',
      validate: {
        isIn: [['Pendente', 'Pago', 'Atrasado']],
      },
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

Financeiro.belongsTo(Pessoa, {
  as: 'cliente',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    name: 'idCliente',
    allowNull: true,
    field: 'id_cliente',
  },
});

Financeiro.belongsTo(Pessoa, {
  as: 'fornecedor',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    name: 'idFornecedor',
    allowNull: true,
    field: 'id_fornecedor',
  },
});

Financeiro.belongsTo(Pessoa, {
  as: 'colaborador',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    name: 'idColaborador',
    allowNull: true,
    field: 'id_colaborador',
  },
});

Financeiro.belongsTo(Usuario, {
  as: 'responsavel',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    name: 'idResponsavel',
    allowNull: false,
    field: 'responsavel',
  },
});

export default Financeiro;
