const db = require("../db/database");

const GetAllSalaDeAula = async (req, res) => {
  try {
    const { rows } = await db.query(
      "SELECT * FROM salasdeaula WHERE removido = false"
    );
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar as salas de aula." });
  }
};

const GetSalaDeAulaById = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res
      .status(400)
      .json({ message: "ID da sala de aula é obrigatório." });
  }

  try {
    const { rows } = await db.query(
      "SELECT * FROM salasdeaula WHERE salasdeaulaid = $1 AND removido = false",
      [id]
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: "Sala de aula não encontrada." });
    }

    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar a sala de aula." });
  }
};

const InsertSalaDeAula = async (req, res) => {
  const { descricao, localizacao, capacidade } = req.body;

  // Validação básica
  if (!descricao || !localizacao || !capacidade) {
    return res.status(400).json({
      message:
        "Os campos descricao, localizacao e capacidade são obrigatórios.",
    });
  }

  try {
    // Query de inserção com retorno
    const result = await db.query(
      "INSERT INTO salasdeaula (descricao, localizacao, capacidade, removido) VALUES ($1, $2, $3, false) RETURNING *",
      [descricao, localizacao, capacidade]
    );

    // Log para verificar o resultado da query
    console.log("Resultado da query:", result.rows);

    // Verificar se a inserção foi bem-sucedida
    if (result.rows.length > 0) {
      res.status(201).json(result.rows[0]); // Retorna o objeto inserido
    } else {
      res.status(400).json({ message: "Falha ao inserir sala de aula." });
    }
  } catch (err) {
    // Tratamento de erro mais descritivo
    console.log("Erro na query de inserção:", err.message);
    res.status(500).json({
      error: "Erro ao inserir sala de aula",
      details: err.message,
    });
  }
};

const UpdateSalaDeAula = async (req, res) => {
  const { id } = req.params;
  const { descricao, localizacao, capacidade } = req.body;

  if (!id || !descricao || !localizacao || !capacidade) {
    return res.status(400).json({
      message:
        "ID e todos os campos (descricao, localizacao, capacidade) são obrigatórios.",
    });
  }

  try {
    const { rows } = await db.query(
      "UPDATE salasdeaula SET descricao = $1, localizacao = $2, capacidade = $3 WHERE salasdeaulaid = $4 AND removido = false RETURNING *",
      [descricao, localizacao, capacidade, id]
    );

    if (rows.length === 0) {
      return res
        .status(404)
        .json({ message: "Sala de aula não encontrada ou já removida." });
    }

    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar sala de aula." });
  }
};

const DeleteSalaDeAula = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res
      .status(400)
      .json({ message: "ID da sala de aula é obrigatório." });
  }

  try {
    const { rows } = await db.query(
      "UPDATE salasdeaula SET removido = true WHERE salasdeaulaid = $1 RETURNING *",
      [id]
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: "Sala de aula não encontrada." });
    }

    res.json({ message: "Sala de aula removida com sucesso." });
  } catch (error) {
    res.status(500).json({ error: "Erro ao remover sala de aula." });
  }
};

module.exports = {
  GetAllSalaDeAula,
  GetSalaDeAulaById,
  InsertSalaDeAula,
  UpdateSalaDeAula,
  DeleteSalaDeAula,
};
