const express = require('express');
const cors = require('cors');
const routes =require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// Rotas/Recurso

// Métode HTTP:
// GET: Buscar/listar uma informação do back-end
// POST: Criar uma informação no back-end
// PUT: Alterar uma informação no back-end
// DELETE: Deletar uma informação no back-end


// Tipos de parametros:
// Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
// Route Params: Parâmetros utilizados para identificar recursos
// Request Body: Corpo da requisição, utilizado para criar ou alterar recursos


// Tipos de BD ralacional e não relacional:
// SQL: Mysql, SQLite, PostgreSQL, Oracle, Mycrosoft SQL server
// NoSQL: MongoDB, CounchDB etc

// Driver: SELECT * FROM users
// Query Builder: table('users').select('*').where()



app.listen(3333);