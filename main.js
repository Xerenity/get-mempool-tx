require('dotenv').config()
const { providers, utils } = require("ethers");

const provider = new providers.WebSocketProvider(process.env.rpcWS);   

const connect = async () => {  
    // Listen for new pending transactions
    provider.on('pendingfull', async (tx) => {        
        doSomething(tx)
    });
}

const doSomething = async (tx) => {
    console.log(tx)
}

connect()