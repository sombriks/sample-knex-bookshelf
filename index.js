
const knex = require("knex")(require("./knexfile").development);
const Bookshelf = require("bookshelf")(knex);

const User = Bookshelf.Model.extend({
  tableName: "user",
  idAttribute: "userid"
});

knex.migrate.latest().then(_ => {

  User.forge().count().then(ret => {
    console.log(ret);
    process.exit(0);
  });

});