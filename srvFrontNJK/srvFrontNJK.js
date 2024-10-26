const express = require("express");
const path = require("path");
const nunjucks = require("nunjucks");

const app = express();
const PORT = 26000; //* Porta do servidor

//* Configuração do Nunjucks
nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

app.use(express.static(path.join(__dirname, "public")));

//* Rota para a página inicial e Busca de Salas de Aula da API
app.get("/saladeaula", async (req, res) => {
  try {
    const response = await fetch("http://localhost:4000/salas");
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.statusText}`);
    }
    const salasDeAula = await response.json();
    res.render("SalaDeAula.njk", { salas: salasDeAula });
  } catch (error) {
    console.error("Erro ao buscar salas de aula: ", error);
    res.status(500).send("Erro ao buscar salas de aula.");
  }
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor Nunjucks rodando em http://localhost:${PORT}`);
});
