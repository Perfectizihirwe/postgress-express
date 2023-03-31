module.exports = {
  development: {
    url: "postgres://rmaulbca:xOctphXcmZeiyRjC37ZTmmbuNVFurQYc@babar.db.elephantsql.com/rmaulbca",
    dialect: "postgres",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "postgres",
  },
};
