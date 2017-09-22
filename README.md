# web3-v1.0
Transition components to move to websocket enabled web3js (v1.0)

# Prerequisites

- geth v1.7.0 or newer

# Run a local testnet node

( I use port 8548 for the WS tests )

```
geth --testnet --syncmode=fast --ws --wsaddr 0.0.0.0 --wsport 8548 --wsorigins '*' --wsapi 'eth,net,web3,shh' --port 30305 --shh
```


# Web3js websocket test

```
$ npm install
$ node index.js
```
