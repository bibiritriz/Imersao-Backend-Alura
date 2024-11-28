import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbconfig.js";

const conexao = await (conectarAoBanco(process.env.STRING_CONEXAO));
const db = conexao.db("Imersao-instabytes");
const colecao = db.collection("posts");

export async function getTodosPosts() {
  return colecao.find().toArray();
};

export async function getTodosUsuarios() {
  const colecao = db.collection("usuarios");
  return colecao.find().toArray();
};

export async function criarPost(novoPost) {
  return colecao.insertOne(novoPost);
};

export async function atualizarPost(id, novoPost) {
  const objID = ObjectId.createFromHexString(id);
  return colecao.updateOne({ _id: new ObjectId(objID) }, { $set: novoPost });
};