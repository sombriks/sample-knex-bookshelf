
const data = [
  {userid:1, username:"Larry"},
  {userid:2, username:"Moe"},
  {userid:3, username:"Curly"},
];

exports.up = knex => knex("user").insert(data);

exports.down = knex => knex("user").del().whereIn("userid",data.map(e => e.userid));