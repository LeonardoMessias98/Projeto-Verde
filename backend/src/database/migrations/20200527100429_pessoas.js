
exports.up = function(knex) {
  return knex.schema.createTable('pessoas', function(table){
    table.increments();
    table.string('nome').notNullable();
    table.string('login').notNullable();
    table.string('senha').notNullable();
    table.string('email').notNullable();
    table.string('cidade').notNullable();
    table.string('estado').notNullable();

  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('pessoas');
};
