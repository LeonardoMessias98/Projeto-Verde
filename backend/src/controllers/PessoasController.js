const connection = require('../database/connection');

module.exports = {
  async index (req, res){
    const pessoas = await connection('pessoas').select('*');

    return res.json(pessoas);
  },

  async create (req,res){
    const { login } = req.body;

    const user = await connection('pessoas').where('login', login).first();

    if(user){
      return res.status(400).json({error: 'login already exists'});
    }

    await connection('pessoas').insert(req.body);

    return res.json(req.body);
  },

  async update (req,res){
    const { id }  = req.body;

    console.log(req.body,id)

    const pessoa = await connection('pessoas').where('id',id).update(req.body);

    return res.json(pessoa);
  },

  async delete(req,res){
    const { id } = req.params;

    console.log(id)

    const pessoa = await connection('pessoas').where('id',id).delete();

    return res.json(pessoa);
  }


}