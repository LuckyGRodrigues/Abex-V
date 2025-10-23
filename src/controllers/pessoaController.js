import PessoaModel from '../models/PessoaModel.js';

const get = async (req, res) => {
  try {
    const id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;

    if (!id) {
      const response = await PessoaModel.findAll({
        order: [['id', 'asc']],
      });
      return res.status(200).send({
        message: 'Dados encontrados!',
        response,
      });
    }

    const response = await PessoaModel.findOne({
      where: { id },
    });

    if (!response) {
      return res.status(404).send({
        message: 'Pessoa não encontrada!',
        response: [],
      });
    }

    return res.status(200).send({
      message: 'Dados encontrados!',
      response,
    });
  } catch (error) {
    return res.status(500).send({
      message: 'Ops! Erro ao buscar dados.',
      response: error.message,
    });
  }
};

const create = async (req, res) => {
  try {
    const {
<<<<<<< Updated upstream
      cpf_cnpj, nome, email, telefone, empresa, cidade, tipo,
=======
      id, cpfCnpj, nome, email, telefone, empresa, cidade, tipo,
>>>>>>> Stashed changes
    } = req.body;

    if (!cpf_cnpj || !nome || !tipo) {
      return res.status(400).send({
        message: 'Campos obrigatórios: cpf_cnpj, nome e tipo.',
        response: [],
      });
    }

    const response = await PessoaModel.create({
<<<<<<< Updated upstream
      cpf_cnpj,
      nome,
      email,
      telefone,
      empresa,
      cidade,
      tipo,
=======
      id, cpfCnpj, nome, email, telefone, empresa, cidade, tipo,
>>>>>>> Stashed changes
    });

    return res.status(201).send({
      message: 'Pessoa criada com sucesso!', 
      response,
    });
  } catch (error) {
    return res.status(500).send({
      message: 'Ops! Erro ao criar registro.',
      response: error.message,
    });
  }
};

const update = async (req, res) => {
  try {
    const id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;

    if (!id) {
      return res.status(400).send({
        message: 'ID não informado.',
        response: [],
      });
    }

    const pessoa = await PessoaModel.findOne({ where: { id } });

    if (!pessoa) {
      return res.status(404).send({
        message: 'Pessoa não encontrada na base de dados.',
        response: [],
      });
    }

    Object.keys(req.body).forEach((campo) => {
      if (req.body[campo] !== undefined) {
        pessoa[campo] = req.body[campo];
      }
    });

    await pessoa.save();

    return res.status(200).send({
      message: 'Dados atualizados com sucesso!',
      response: pessoa,
    });
  } catch (error) {
    return res.status(500).send({
      message: 'Ops! Erro ao atualizar registro.',
      response: error.message,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;

    if (!id) {
      return res.status(400).send({
        message: 'ID não informado.',
        response: [],
      });
    }

    const pessoa = await PessoaModel.findOne({ where: { id } });

    if (!pessoa) {
      return res.status(404).send({
        message: 'Pessoa não encontrada na base.',
        response: [],
      });
    }

    await pessoa.destroy();

    return res.status(200).send({
      message: 'Pessoa deletada com sucesso!',
      response: [],
    });
  } catch (error) {
    return res.status(500).send({
      message: 'Ops! Erro ao deletar registro.',
      response: error.message,
    });
  }
};

export default {
  get,
  create,
  update,
  destroy,
};
