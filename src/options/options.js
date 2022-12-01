const path = require('path');
var path1 = path.resolve(__dirname, '../db/mydb.sqlite')
const options = {
    mysql: {
        client: 'mysql',
        connection: {
            host: '127.0.0.1',
            user: 'root',
            password: '',
            database: 'mybase'
        },
        pool: { min: 0, max: 7 }
    },
    sqlite3: {
        client: 'sqlite3',
        connection: {
          filename: path1
        },
        useNullAsDefault: true
      }
};

module.exports = options;