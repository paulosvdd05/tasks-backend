// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
    client: 'postgresql',
    connection: {
      database: 'tasks_8s5d',
      user:     'paulo',
      password: 'X9dJXmQCRAyRtPrSaXMUbRJTkE1sSunA'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
};
