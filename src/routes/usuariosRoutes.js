import express from "express";
import { listarUsuarios } from "../controller/usuariosController.js";


const routes2 = (app) => {
  app.use(express.json());
  app.get("/usuarios", listarUsuarios);
};

export default routes2;
