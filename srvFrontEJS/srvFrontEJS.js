// srvFrontEJS.js

const express = require("express");
const path = require("path");

const app = express();
const PORT = 25000; //* Porta do servidor

//* Configuração do EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index", { titulo: "Sistema ERP - Controle Escolar" });
});

app.listen(PORT, () => {
  console.log(`Servidor EJS rodando em http://localhost:${PORT}`);
});
