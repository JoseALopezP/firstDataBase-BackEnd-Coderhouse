const knex = require('knex');

class Container {
    constructor(options, table) {
        this.connection = knex(options);
        this.table = table;
    }

    async save(object) {
        try {
            await this.connection(this.table).insert(object);
            return id;
        } catch (error) {
            console.log(error)
        }
    }

    async getById(id){
        try {
            return await this.connection(this.table).where('id', id);
        } catch (error) {
            console.log(error);
            return null
        }
    }

    async getAll() {
        try {
            return await this.connection(this.table);
        } catch (error) {
            console.log(error)
        }
    }

    async deleteById(id) {
        try {
            await this.connection(this.table).where('id', id).del();
            return id;
        } catch (error) {
            console.log(error)
        }
    }

    async deleteAll() {
        try {
            await this.connection(this.table).del();
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = Container;