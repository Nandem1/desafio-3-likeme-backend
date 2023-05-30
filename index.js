const express = require("express");
const app = express();
const morgan = require("morgan");
const { agregarPosts, obtenerPosts } = require("./consultas.js");
const cors = require("cors");

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on http://localhost:${process.env.PORT || 3000}`);
});

app.get("/posts", async (req, res) => {
  const posts = await obtenerPosts();
  res.send(posts);
});

app.post("/posts", async (req, res) => {
  const { titulo, img, descripcion, likes } = req.body;
  const post = await agregarPosts(titulo, img, descripcion, likes);
  res.send(post);
});