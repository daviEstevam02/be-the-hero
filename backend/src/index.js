//install nodemon -D para instalara como dependencia de Dev(apenas enquanto estiver codando) e não dependencia da aplicação
//declaração da rota '/'-> /user ->recurso
/**
 * Métodos HTTP:
 * 
 * GET: buscar/listar uma inforação do back-end
 * POST: Criar/cadastrar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELET: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: parametros nomeados enviados na rota após "?" usado para filtros/paginações  ex:
 * /Users?name=Davi&idade=18 -> acesso: request.query
 * Route Params: parametros utilizados para identificar recursos -> request.params
 * Request Body: Corpo da requisição, criar ou alterar recursos
 */

/**
 * Bando de dados: 
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server 
 * NoSQL: MongoDB,CouchDB, etc...
 */

/**
 * Driver: pacote do banco de dados pra NODE -> SELECT * FROM users
 * Query Builder: table('users').select('*').where() -> pode usar em todos os SQL
 *      KNEX.JS -> nome da querybuilder
 */

//Navegador toda vez que acessamos uma página utiliza apenas o método get - baixe o Insomina

const express = require('express'); //importing express to a variable
const cors = require('cors');
const routes = require('./routes'); 

const app = express();

app.use(cors());//aplicações frontend que podem acessar
app.use(express.json())//antes de todas as requisições converter Json em objeto para a aplicação entender
app.use(routes);

app.listen(3333);