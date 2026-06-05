const express = require("express");
const app = express();

app.use(express.json());

// Banco de dados simulado
let alunos = [
    { id: 1, nome: "João", idade: 16 },
    { id: 2, nome: "Maria", idade: 17 }
];

// GET - Listar alunos
app.get("/alunos", (req, res) => {
    res.json(alunos);
});

// GET - Buscar aluno por ID
app.get("/alunos/:id", (req, res) => {
    const aluno = alunos.find(a => a.id == req.params.id);

    if (!aluno) {
        return res.status(404).json({ mensagem: "Aluno não encontrado" });
    }

    res.json(aluno);
});

// POST - Cadastrar aluno
app.post("/alunos", (req, res) => {
    const { nome, idade } = req.body;

    const novoAluno = {
        id: alunos.length + 1,
        nome,
        idade
    };

    alunos.push(novoAluno);

    res.status(201).json({
        mensagem: "Aluno cadastrado com sucesso!",
        aluno: novoAluno
    });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});