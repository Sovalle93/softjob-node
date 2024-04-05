import pool from "../../config/database/connectionDB.js"

const getProfiles = async () => {
  const SQLquery = {
    text: "SELECT email, rol, lenguage FROM usuarios",
  }
  const response = await pool.query(SQLquery)
  return response.rows
};

export { getProfiles }
