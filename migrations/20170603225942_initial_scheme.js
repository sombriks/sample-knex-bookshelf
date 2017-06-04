
exports.up = knex => knex.schema.createTable("user", tb => {
  tb.increments("userid");
  tb.string("username");
  tb.timestamp("userdtcreation").defaultTo(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable("user");
