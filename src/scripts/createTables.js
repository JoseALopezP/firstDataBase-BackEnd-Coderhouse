const knex = require('knex');
const options = require('../../options/options.js')

async function createTables(){
    // MariaDb
    try {
        const mySQLClient = knex(options.mysql);
        const isCreated = await mySQLClient.schema.hasTable('productos');
        if(!isCreated){
            await mySQLClient.schema.createTable('products', table => {
                table.increments('id')
                table.string('title')
                table.integer('price')
                table.string('thumbnail')
            })
        }
    } catch (error) {
        console.log(error)
    }
    // SQLite3
    try {
        const sqliteClient = knex(options.sqlite3);
        const isCreated = await sqliteClient.schema.hasTable('productos');
        if(!isCreated){
            await sqliteClient.schema.createTable('messages', table => {
                table.string('date');
                table.string('mail').notNullable();
                table.string('text');
            });
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = createTables;


