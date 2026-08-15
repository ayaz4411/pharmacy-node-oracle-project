const oracledb = require("oracledb");

async function getConnection() {
  return oracledb.getConnection({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    connectString: process.env.DB_CONNECT_STRING
  });
}

async function testConnection() {
  let connection;

  try {
    connection = await getConnection();

    const result = await connection.execute(
      `SELECT 'Oracle connection successful' AS MESSAGE,
              SYS_CONTEXT('USERENV', 'DB_NAME') AS DB_NAME,
              SYS_CONTEXT('USERENV', 'SERVICE_NAME') AS SERVICE_NAME
       FROM DUAL`
    );

    return result.rows[0];
  } finally {
    if (connection) {
      await connection.close();
    }
  }
}

module.exports = { getConnection, testConnection };