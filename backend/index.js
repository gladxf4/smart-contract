// Importing required libraries
const express = require('express');
const Web3 = require('web3');

// Setting up Express server
const app = express();
const port = 3000;

// Ganache is a local Ethereum blockchain, we connect to it via Web3
const web3 = new Web3('http://127.0.0.1:8545'); // Ganache RPC URL

// Default route
app.get('/', (req, res) => {
    res.send('Web3 Backend is running!');
});

// API to interact with blockchain, e.g., get balance of an account
app.get('/balance/:address', async (req, res) => {
    const address = req.params.address;
    const balance = await web3.eth.getBalance(address);
    res.send({ balance: web3.utils.fromWei(balance, 'ether') + ' ETH' });
});

// Starting the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
