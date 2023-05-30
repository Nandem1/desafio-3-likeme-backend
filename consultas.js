const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "2201",
  database: "likeme",
  allowExitOnIdle: true,
});

const agregarPosts = async (titulo, img, descripcion, likes) => {
  const consulta = `INSERT INTO posts VALUES (DEFAULT, $1, $2, $3, $4)`;
  const values = [titulo, img, descripcion, likes];
  const result = await pool.query(consulta, values);
  console.log("Post agregado exitosamente");
};

const obtenerPosts = async () => {
  const { rows } = await pool.query("SELECT * FROM posts");
  console.log(rows);
  return rows;
}

module.exports = { agregarPosts, obtenerPosts }