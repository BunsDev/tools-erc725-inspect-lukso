"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[134],{9366:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7568),s=n(655),y=n(7294),i=n(7918),p=n.n(i),r=n(3538);function u(){var e=(0,y.useState)(),t=e[0],n=e[1],i=(0,y.useContext)(r.J).network;return(0,y.useEffect)((function(){var e=function(){var e=(0,a.Z)((function(){return(0,s.__generator)(this,(function(e){return[2,new(p())(i.rpc)]}))}));return function(){return e.apply(this,arguments)}}();e().then((function(e){n(e)}))}),[i]),t}},2179:function(e){e.exports=JSON.parse('{"Mt":[{"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contractAddress","type":"address"}],"name":"ContractCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"key","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"value","type":"bytes"}],"name":"DataChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_operation","type":"uint256"},{"indexed":true,"internalType":"address","name":"_to","type":"address"},{"indexed":true,"internalType":"uint256","name":"_value","type":"uint256"},{"indexed":false,"internalType":"bytes","name":"_data","type":"bytes"}],"name":"Executed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"bytes32","name":"typeId","type":"bytes32"},{"indexed":true,"internalType":"bytes","name":"returnedValue","type":"bytes"},{"indexed":false,"internalType":"bytes","name":"receivedData","type":"bytes"}],"name":"UniversalReceiver","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"uint256","name":"value","type":"uint256"}],"name":"ValueReceived","type":"event"},{"inputs":[{"internalType":"bytes32[]","name":"_keys","type":"bytes32[]"}],"name":"getData","outputs":[{"internalType":"bytes[]","name":"values","type":"bytes[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_hash","type":"bytes32"},{"internalType":"bytes","name":"_signature","type":"bytes"}],"name":"isValidSignature","outputs":[{"internalType":"bytes4","name":"magicValue","type":"bytes4"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_typeId","type":"bytes32"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"universalReceiver","outputs":[{"internalType":"bytes","name":"returnValue","type":"bytes"}],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"},{"inputs":[{"internalType":"uint256","name":"_operation","type":"uint256"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"execute","outputs":[{"internalType":"bytes","name":"result","type":"bytes"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes32[]","name":"_keys","type":"bytes32[]"},{"internalType":"bytes[]","name":"_values","type":"bytes[]"}],"name":"setData","outputs":[],"stateMutability":"nonpayable","type":"function"}]}')}}]);