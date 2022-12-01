export default{
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
            filename: 'db/mydb.sqlite'
        },
        useNullAsDefault: true
    }
};