require('dotenv').config()
const express = require('express')
const logger = require("./middlewares/RequestLogger")
const operation = require("./operations")
const app = express()
const port = process.env.SERVER_PORT

app.use(logger.logRequest);

// CÓDIGO REPLICABLE
app.get('/sum-operation', (req, res) => {
  const {a, b} = req.query;
  const sum = operation.sumOperation(a, b);

  if(Number.isNaN(sum)){
    res.send(`ERROR AL REALIZAR LA SUMA (DATOS INVÁLIDOS)`);
  }else{
    res.send(`RESULTADO DE SUMA: ${a} + ${b} = ${sum}`);
  }
})
// FIN DE CÓDIGO REPLICABLE

app.get('/multiplication-operation', (req, res) => {
  const {a, b} = req.query;
  const multiplication = operation.multiplicationOperation(a, b);

  if(Number.isNaN(multiplication)){
    res.send(`ERROR AL REALIZAR LA MULTIPLICACIÓN (DATOS INVÁLIDOS)`);
  }else{
    res.send(`RESULTADO DE LA MULTIPLICACIÓN: ${a} * ${b} = ${multiplication}`);
  }
})

app.get('/', (req, res) => {
  res.send('HOLA MUNDO (SERVIDOR ACTIVO)')
})

app.listen(port, () => {
  console.log(`SERVIDOR ACTIVO EN: http://localhost:${port}`)
})
