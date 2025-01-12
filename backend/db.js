const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "DeltaHacks2025",
  "postgres",
  process.env.DB_PASS || "#Tomiwa12",
  {
    host: "localhost",
    dialect: "postgres",
  }
);

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = sequelize;