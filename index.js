const express = require('express');
const bodyParser = require('body-parser'); 
const cors = require('cors'); 
const bcrypt = require('bcrypt');


const app = express();


app.use(cors());
app.use(bodyParser.json());

const usuarios = [];
let recados = [];


//Criar usuário 
app.post('/api/usuarios', (req, res) => {
  const { nome, email, senha } = req.body;
  bcrypt.hash(senha, 10, (err, hash) => {
    if (err) {
      res.status(500).send('Erro ao criar usuário');
    } else {
      const novoUsuario = { id: Date.now().toString(), nome, email, senha: hash };
      usuarios.push(novoUsuario);
      const mensagem = "Usuário Criado com sucesso: " + novoUsuario.nome; 
      res.send(mensagem);
    }
  });
  
});


//Realizar o login verificando se os dados batem com os criados
app.post('/api/login', (req, res) => {
  const { email, senha } = req.body;
  const user = usuarios.find((u) => u.email === email);
if (user) {
  bcrypt.compare(senha, user.senha, (err, result) => {
    if (result) {
      const mensagem = "Usuário Logado: " + user.nome; 
      res.send(mensagem);
    } else {
      res.status(401).send('E-mail ou senha incorretos');
    }
  });
} else {
  res.status(401).send('E-mail ou senha incorretos');
}

});

//Criar recado com geração automática de ID
  app.post('/api/recados', (req, res) => {
  const { titulo, descricao, userId } = req.body;
  const recado = { id: Date.now().toString(), titulo, descricao};
  recados.push(recado);
  res.send(recado);
});


//Mostrar recados criados
app.get('/api/recados', (req, res) => {
  res.send(recados);
});


//Procurar recado por ID
app.get('/api/recados/:id', (req, res) => {
  const recado = recados.find((r) => r.id === req.params.id);
  if (recado) {
    res.send(recado);
  } else {
    res.status(404).send('Recado não encontrado');
  }
});


//Realizar update no recado 
app.put('/api/recados/:id', (req, res) => {
  const index = recados.findIndex((r) => r.id === req.params.id);
  if (index === -1) {
    res.status(404).send('Recado não encontrado');
  } else {
    recados[index] = { ...recados[index], ...req.body };
    res.send(recados[index]);
  }
});


//Buscar recado por ID e realizar a exclusão
app.delete('/api/recados/:id', (req, res) => {
  const index = recados.findIndex((r) => r.id === req.params.id);
  if (index === -1) {
    res.status(404).send('Recado não encontrado');
  } else {
    const recado = recados[index];
    recados = recados.filter((r) => r.id !== req.params.id);
    const resposta = "Recado apagado com titulo: " + recado.titulo; 
    res.send(resposta);
  }
});


//Iniciar servidor
app.listen(1425, () => {
  console.log('Servidor rodando na porta 1425');
});
