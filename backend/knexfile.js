// Update with your config settings.
//npx knex init: acesso ao banco de dados para cada ambiente
module.exports = {

  development: {//ambiente de dev 
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite'
    },
    migrations: {
      directory:'./src/database/migrations'
    },
    useNullAsDefault: true,
  },

  staging: {//ambiente que simula e serve pra testar 
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {//ambiente de produção quando é lançado online para cliente acessar
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
