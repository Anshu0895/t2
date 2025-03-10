var settings = {
  development: {
    db: "notejam",
    user: "anshu",
    password: "anshu",
    host: "localhost",
    port: 5432,
    dsn: "postgres://anshu:anshu@localhost:5432/notejam"
  },
  test: {
    db: "notejam_test",
    user: "anshu",
    password: "anshu",
    host: "localhost",
    port: 5432,
    dsn: "postgres://anshu:anshu@localhost:5432/notejam_test"
  }
};

var env = process.env.NODE_ENV || 'development';
module.exports = settings[env];
