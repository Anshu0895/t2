// var settings = {
//   development: {
//     db: "notejam",
//     user: "anshu",
//     password: "anshu",
//     host: "localhost",
//     port: 5432,
//     dsn: "postgres://anshu:anshu@localhost:5432/notejam"
//   },
//   test: {
//     db: "notejam_test",
//     user: "anshu",
//     password: "anshu",
//     host: "localhost",
//     port: 5432,
//     dsn: "postgres://anshu:anshu@localhost:5432/notejam_test"
//   }
// };

// var env = process.env.NODE_ENV || 'development';
// module.exports = settings[env];
var settings = {
  development: {
    db: process.env.DB_NAME || "notejam",
    user: process.env.DB_USER || "anshu",
    password: process.env.DB_PASSWORD || "anshu",
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || "5432",
    dsn: `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT || 5432}/${process.env.DB_NAME}`
  },
  production: {
    db: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || "5432",
    dsn: `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT || 5432}/${process.env.DB_NAME}`
  }
};

var env = process.env.NODE_ENV || "development";
console.log("Loaded settings:", settings[env]);  // ✅ Debugging statement
module.exports = settings[env];