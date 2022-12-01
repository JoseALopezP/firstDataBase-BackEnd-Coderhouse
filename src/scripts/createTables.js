const knex = require('knex');
const options = require('../options/options.js')
console.log(options.sqlite3);

const mySQLClient = knex(options.mysql);
const sqliteClient = knex(options.sqlite3);

(async () => {
    // MariaDb
    try {
        
        const isCreated = await mySQLClient.schema.hasTable('products');
        if(!isCreated){
            await mySQLClient.schema.createTable('products', table => {
                table.increments('id')
                table.string('title')
                table.integer('price')
                table.string('thumbnail')
            })
        }
    } catch (error) {
        console.log(2);
        console.log(error)
    }
    // SQLite3
    try {
        const isCreated = await sqliteClient.schema.hasTable('messages');
        if(!isCreated){
            await sqliteClient.schema.createTable('messages', (table) => {
                table.increments('id')
                table.string('time')
                table.string('email').notNullable()
                table.string('text')
            });
        }
    } catch (error) {
        console.log(1);
        console.log(error)
    }
})();
    



