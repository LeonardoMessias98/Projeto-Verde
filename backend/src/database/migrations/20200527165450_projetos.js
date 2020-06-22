
exports.up = function(knex) {
  return knex.schema.createTable('projetos', function(table){
    table.increments();
    table.string('nome').notNullable();
    table.string('description').notNullable();
    table.string('empresa_id').notNullable();
    table.string('cidade').notNullable();
    table.string('estado').notNullable();

    table.foreign('empresa_id').references('id').inTable('empresas');

  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('projetos');
};
