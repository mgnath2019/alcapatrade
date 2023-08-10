// Import the express in typescript file
import express from 'express';
 
// Initialize the express engine
const app: express.Application = express();
 
// Take a port 3000 for running server.
const port: number = 3000;

const Alpaca = require('@alpacahq/alpaca-trade-api')
const alpaca = new Alpaca({
    keyId: 'PKV7FQB9BKEDBGZQUCP7',
    secretKey: 'W1s6ja9iHbZUTLCEgdwL9btcbfFaR7Oe3hBvhbgZ',
    paper: true,
  });

// Handling '/' Request
app.get('/', (_req, _res) => {
    _res.send("Alcapa Trade API v0.1");
});
app.post('/account', async (_req, _res) => {
    let acco =  await alpaca.getAccount();
    return _res.send(acco); 
});
 
// Server setup
app.listen(port, () => {
    console.log(`TypeScript with Express
         http://localhost:${port}/`);
});