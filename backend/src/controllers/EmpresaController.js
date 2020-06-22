const connection = require('../database/connection');

module.exports = {
  async index (req, res){
    const empresas = await connection('empresas').select('*');

    return res.json(empresas);
  },

  async create (req,res){
    const { login } = req.body;

    const user = await connection('empresas').where('login', login).first();

    if(user){
      return res.status(400).json({error: 'login already exists'});
    }

    await connection('empresas').insert(req.body);

    return res.json(req.body);
  },

  async update (req,res){
    const { id } = req.body;

    const empresa = await connection('empresas').where('id',id).update(req.body);

    return res.json(empresa);
  },

  async delete(req,res){
    const { id } = req.params;

    const empresa = await connection('empresas').where('id',id).delete();

    return res.json(empresa);
  }


}