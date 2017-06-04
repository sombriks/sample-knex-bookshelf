# sample knex/bookshelf quickstart

```bash
mkdir sample-knex-bookshelf
cd sample-knex-bookshelf
npm init -y
npm install sqlite3 knex bookshelf
sudo npm -g install knex
knex migrate:make initial_scheme
knex migrate:make initial_data
touch index.js
code .
```
