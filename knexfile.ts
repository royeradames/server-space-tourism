/* update with your config settings */
const pgConnection = process.env.DATABASE_URL;

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./db/spaceTourism.db3",
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./db/migrations",
      tableName: "knex_migrations",
    },
    seeds: {
      directory: "./db/seeds",
    },
    pool: {
      afterCreate: (conn: any, done: any) => {
        conn.run(`PRAGMA foreign_key = ON`, done);
      },
    },
  },
  testing: {
    client: "sqlite3",
    connection: {
      filename: ":memory",
    },
    useNullAsDefault: true,
    migrations: {
      directory: {
        directory: "./db/migrations",
        tableName: "knex_migrations",
      },
    },
    seeds: {
      directory: "./db/seeds",
    },
    pool: {
      afterCreate: (conn: any, done: any) => {
        conn.run(`PRAGMA foreign_key = ON`, done);
      },
    },
  },
  production: {
    client: "pg",
    connection: pgConnection,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./db/migrations",
    },
    seeds: {
      directory: "./db/seeds",
    },
  },
};
