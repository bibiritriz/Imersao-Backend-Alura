import express from "express";
import postRoutes from "./src/routes/postRoutes.js";
import usuariosRoutes from "./src/routes/usuariosRoutes.js";

const app = express();
postRoutes(app);
app.use(express.static("uploads"));
usuariosRoutes(app);

app.listen(3000, () => {
  console.log("Servidor escutando...");
});

// app.get("/posts/:id", (req, res) => {
//   const index = buscarPostPorId(req.params.id);
//   res.status(200).json(posts[index]);
// });

// function buscarPostPorId(id){
//   return posts.findIndex((post) => post.id === Number(id));
// };