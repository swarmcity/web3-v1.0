var Web3 = require('web3');
var p = new Web3.providers.WebsocketProvider('ws://localhost:8548');
var web3 = new Web3(p);

console.log(p);

// web3.eth.isSyncing()
// .then(console.log);


// web3.eth.getTransaction('0x7dc7d8cf8d5fd3bcbe62f494153a061a8c2019a4658000dce7ebbf9c7d4f8ae3',function(a,b){
// 	console.log(a,b);
// });

var subscription = web3.eth.subscribe('pendingTransactions', function(error, result){
    if (!error)
        console.log(result);
    else
    	console.log(error);
});

// // unsubscribes the subscription
// subscription.unsubscribe(function(error, success){
//     if(success)
//         console.log('Successfully unsubscribed!');
// });
// console.log(web3.eth.getBlock());




