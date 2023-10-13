// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  client: 'pg',
  connection: 'postgres://paulo:X9dJXmQCRAyRtPrSaXMUbRJTkE1sSunA@dpg-ckjauo8mccbs738houh0-a/tasks_8s5d',
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
