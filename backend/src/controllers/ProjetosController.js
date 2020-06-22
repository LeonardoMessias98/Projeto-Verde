const connection = require('../database/connection');

module.exports = {
  async index(req,res){
    return res.json(await connection('projetos').select('*'));
  },

  async create (req,res){
    await connection('projetos').insert(req.body);

    return res.json(req.body);
  },

  async update (req,res){
    const id = req.headers.authorization;

    const projeto = await connection('projetos').where('id',id).update(req.body);

    return res.json(projeto);
  },

  async delete(req,res){
    const id = req.headers.authorization;

    const projeto = await connection('projetos').where('id',id).delete();

    return res.json(projeto);
  }

}