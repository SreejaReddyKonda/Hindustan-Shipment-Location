const express = require('express')
const bodyParser = require('body-parser')
const Web3 = require('web3');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

// console.log(web3.providers);

const web3 = new Web3("HTTP://127.0.0.1:7545");

// const web3 = new Web3("https://ropsten.infura.io/v3/37ce477e00c14a8390548738542dd9aa");
web3.eth.getAccounts(function(err,accounts){
    console.log(accounts)
})

var account = "0xcaFC0b78b7b914Fda805f007773B7Aeac18501A5"

// hidestream
var pkey = "4d075ed25bad0871f3d7e40ce1dbd9f96bca8dc1a887ee10f853c2c3748b5052"

var abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_orderId",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_location",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_timereach",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_date",
				"type": "string"
			}
		],
		"name": "setcustomertrackorder",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_longitude",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_latitude",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_placeName",
				"type": "string"
			}
		],
		"name": "setGPSTracker",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_productId",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_vehregisterNum",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_StateId",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_currentinRole",
				"type": "string"
			}
		],
		"name": "setProductDetails",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_SId",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_Email",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_mobileNumber",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_date",
				"type": "string"
			}
		],
		"name": "setSellerDetails",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_currentinStrState",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_currentinDesState",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_currentindistrict",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_currentincity",
				"type": "string"
			}
		],
		"name": "settrackStatus",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_TId",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_Email",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_mobileNumber",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_date",
				"type": "string"
			}
		],
		"name": "setTransporterDetails",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_username",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_password",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_mobileNumber",
				"type": "uint256"
			}
		],
		"name": "setuserloginDetails",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_newusername",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_setpassword",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_reentersetpassword",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_mobileNumber",
				"type": "uint256"
			}
		],
		"name": "setuserregistrationDetails",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_WId",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_Email",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_mobileNumber",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "_packed",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "_dispatched",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "_outforDelivery",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "_date",
				"type": "string"
			}
		],
		"name": "setWarehouseDetails",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_orderId",
				"type": "string"
			}
		],
		"name": "getcustomertrackorder",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_longitude",
				"type": "string"
			}
		],
		"name": "getGPSTracker",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_productId",
				"type": "string"
			}
		],
		"name": "getProductDetails",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_SId",
				"type": "string"
			}
		],
		"name": "getSellerDetails",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_currentindistrict",
				"type": "string"
			}
		],
		"name": "gettrackStatus",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_TId",
				"type": "string"
			}
		],
		"name": "getTransporterDetails",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_password",
				"type": "string"
			}
		],
		"name": "getuserloginDetails",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_setpassword",
				"type": "string"
			}
		],
		"name": "getuserregistrationDetails",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_WId",
				"type": "string"
			}
		],
		"name": "getWarehouseDetails1",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
var contractAddress = "0x3686a10655e9B97CE55A8A81Cf1e4d9918C2D2BE";

var myContract = new web3.eth.Contract(abi,contractAddress);

console.log(myContract.methods);


app.get('/', function (req, res) {
    console.log(__dirname);
//   res.send('Hello World')
res.sendFile(__dirname+'/start.html');
});
app.get('/start.html',function (req,res){
	res.sendFile(__dirname + '/start.html' );
});
app.get('/userloginDetails.html',function (req,res){
	res.sendFile(__dirname + '/userloginDetails.html' );
});


app.get('/', function (req, res) {
    console.log(__dirname);
//   res.send('Hello World')
res.sendFile(__dirname+'/userloginDetails.html');
});
app.get('/userregistrationDetails.html',function (req,res){
	res.sendFile(__dirname + '/userregistrationDetails.html' );
});
app.get('/Main.html',function (req,res){
	res.sendFile(__dirname + '/Main.html' );
});
app.get('/start.html',function (req,res){
	res.sendFile(__dirname + '/start.html' );
});




app.get('/', function (req, res) {
    console.log(__dirname);
//   res.send('Hello World')
res.sendFile(__dirname+'/Main.html');
});
app.get('/GETProductDetails.html',function (req,res){
	res.sendFile(__dirname + '/GETProductDetails.html' );
});
app.get('/GETSellerDetails.html',function (req,res){
	res.sendFile(__dirname + '/GETSellerDetails.html' );
});
app.get('/start.html',function (req,res){
	res.sendFile(__dirname + '/start.html' );
});


app.get('/ProductDetails.html',function (req,res){
	res.sendFile(__dirname + '/ProductDetails.html' );
});
app.get('/SellerDetails.html',function (req,res){
	res.sendFile(__dirname + '/SellerDetails.html' );
});
app.get('/WarehouseDetails.html',function (req,res){
	res.sendFile(__dirname + '/WarehouseDetails.html' );
});
app.get('/TransporterDetails.html',function (req,res){
	res.sendFile(__dirname + '/TransporterDetails.html' );
});
app.get('/trackStatus.html',function (req,res){
	res.sendFile(__dirname + '/trackStatus.html' );
});
app.get('/customertrackorder.html',function (req,res){
	res.sendFile(__dirname + '/customertrackorder.html' );
});
app.get('/GPSTracker.html',function (req,res){
	res.sendFile(__dirname + '/GPSTracker.html' );
});




app.get('/', function (req, res) {
    console.log(__dirname);
//   res.send('Hello World')
res.sendFile(__dirname+'/GETProductDetails.html');
});
app.get('/GETProductDetails.html',function (req,res){
	res.sendFile(__dirname + '/GETProductDetails.html' );
});

app.get('/', function (req, res) {
    console.log(__dirname);
//   res.send('Hello World')
res.sendFile(__dirname+'/GETSellerDetails.html');
});
app.get('/GETSellerDetails.html',function (req,res){
	res.sendFile(__dirname + '/GETSellerDetails.html' );
});

app.get('/', function (req, res) {
    console.log(__dirname);
//   res.send('Hello World')
res.sendFile(__dirname+'/GETWareHouseDetails.html');
});
app.get('/GETWareHouseDetails.html',function (req,res){
	res.sendFile(__dirname + '/GETWareHouseDetails.html' );
});

app.get('/', function (req, res) {
    console.log(__dirname);
//   res.send('Hello World')
res.sendFile(__dirname+'/GETTransporterDetails.html');
});
app.get('/GETTransporterDetails.html',function (req,res){
	res.sendFile(__dirname + '/GETTransporterDetails.html' );
});

app.get('/', function (req, res) {
    console.log(__dirname);
//   res.send('Hello World')
res.sendFile(__dirname+'/GETTrackStatus.html');
});
app.get('/GETTrackStatus.html',function (req,res){
	res.sendFile(__dirname + '/GETTrackStatus.html' );
});

app.get('/', function (req, res) {
    console.log(__dirname);
//   res.send('Hello World')
res.sendFile(__dirname+'/GETCustomerTrackOrder.html');
});
app.get('/GETCustomerTrackOrder.html',function (req,res){
	res.sendFile(__dirname + '/GETCustomerTrackOrder.html' );
});

app.get('/', function (req, res) {
    console.log(__dirname);
//   res.send('Hello World')
res.sendFile(__dirname+'/GETGps.html');
});
app.get('/GETGps.html',function (req,res){
	res.sendFile(__dirname + '/GETGps.html' );
});






app.post('/enrolluserloginDetails',function(req,res){

    console.log(req.body);
    console.log('inside post') ;
	var encodedData = myContract.methods.setuserloginDetails(req.body.username,req.body.password,req.body.mobileNumber).encodeABI();
	console.log(encodedData);

	var transactionObject = {
		gas : "470000",
		data : encodedData,
		from : account,
		to : contractAddress
	};


	web3.eth.accounts.signTransaction(transactionObject,pkey,function(error,trans){
		console.log(trans);
		web3.eth.sendSignedTransaction(trans.rawTransaction)
		.on("receipt",function(result){
			console.log(result);
			res.send(result);
		})
	})
})




app.post('/enrolluserregistrationDetails',function(req,res){

    console.log(req.body);
    console.log('inside post') ;
	var encodedData = myContract.methods.setuserregistrationDetails(req.body.newusername,req.body.setpassword,req.body.reentersetpassword,req.body.mobileNumber).encodeABI();
	console.log(encodedData);

	var transactionObject = {
		gas : "470000",
		data : encodedData,
		from : account,
		to : contractAddress
	};


	web3.eth.accounts.signTransaction(transactionObject,pkey,function(error,trans){
		console.log(trans);
		web3.eth.sendSignedTransaction(trans.rawTransaction)
		.on("receipt",function(result){
			console.log(result);
			res.send(result);
		})
	})
})





app.post('/enrollProductDetails',function(req,res){

    console.log(req.body);
    console.log('inside post') ;
	var encodedData = myContract.methods.setProductDetails(req.body.productId,req.body.vehregisterNum,req.body.StateId,req.body.currentinRole).encodeABI();
	console.log(encodedData);

	var transactionObject = {
		gas : "470000",
		data : encodedData,
		from : account,
		to : contractAddress
	};


	web3.eth.accounts.signTransaction(transactionObject,pkey,function(error,trans){
		console.log(trans);
		web3.eth.sendSignedTransaction(trans.rawTransaction)
		.on("receipt",function(result){
			console.log(result);
			res.send(result);
		})
	})
})






app.post('/enrollSellerDetails',function(req,res){

    console.log(req.body);
    console.log('inside post') ;
	var encodedData = myContract.methods.setSellerDetails(req.body.name,req.body.SId,req.body.Email,req.body.mobileNumber,req.body.date).encodeABI();
	console.log(encodedData);

	var transactionObject = {
		gas : "470000",
		data : encodedData,
		from : account,
		to : contractAddress
	};


	web3.eth.accounts.signTransaction(transactionObject,pkey,function(error,trans){
		console.log(trans);
		web3.eth.sendSignedTransaction(trans.rawTransaction)
		.on("receipt",function(result){
			console.log(result);
			res.send(result);
		})
	})
})






app.post('/enrollWarehouseDetails',function(req,res){

    console.log(req.body);
    console.log('inside post') ;
	var encodedData = myContract.methods.setWarehouseDetails(req.body.WId,req.body.Email,req.body.mobileNumber,req.body.packed,req.body.dispatched,req.body.outfordelivery,req.body.date).encodeABI();
	console.log(encodedData);

	var transactionObject = {
		gas : "470000",
		data : encodedData,
		from : account,
		to : contractAddress
	};


	web3.eth.accounts.signTransaction(transactionObject,pkey,function(error,trans){
		console.log(trans);
		web3.eth.sendSignedTransaction(trans.rawTransaction)
		.on("receipt",function(result){
			console.log(result);
			res.send(result);
		})
	})
})






app.post('/enrollTransporterDetails',function(req,res){

    console.log(req.body);
    console.log('inside post') ;
	var encodedData = myContract.methods.setTransporterDetails(req.body.name,req.body.TId,req.body.Email,req.body.mobileNumber,req.body.date).encodeABI();
	console.log(encodedData);

	var transactionObject = {
		gas : "470000",
		data : encodedData,
		from : account,
		to : contractAddress
	};


	web3.eth.accounts.signTransaction(transactionObject,pkey,function(error,trans){
		console.log(trans);
		web3.eth.sendSignedTransaction(trans.rawTransaction)
		.on("receipt",function(result){
			console.log(result);
			res.send(result);
		})
	})
})






app.post('/enrolltrackStatus',function(req,res){

    console.log(req.body);
    console.log('inside post') ;
	var encodedData = myContract.methods.settrackStatus(req.body.currentinStrState,req.body.currentinDesState,req.body.currentindistrict,req.body.currentincity).encodeABI();
	console.log(encodedData);

	var transactionObject = {
		gas : "470000",
		data : encodedData,
		from : account,
		to : contractAddress
	};


	web3.eth.accounts.signTransaction(transactionObject,pkey,function(error,trans){
		console.log(trans);
		web3.eth.sendSignedTransaction(trans.rawTransaction)
		.on("receipt",function(result){
			console.log(result);
			res.send(result);
		})
	})
})








app.post('/enrollcustomertrackorder',function(req,res){

    console.log(req.body);
    console.log('inside post') ;
	var encodedData = myContract.methods.setcustomertrackorder(req.body.orderId,req.body.location,req.body.timereach,req.body.date).encodeABI();
	console.log(encodedData);

	var transactionObject = {
		gas : "470000",
		data : encodedData,
		from : account,
		to : contractAddress
	};


	web3.eth.accounts.signTransaction(transactionObject,pkey,function(error,trans){
		console.log(trans);
		web3.eth.sendSignedTransaction(trans.rawTransaction)
		.on("receipt",function(result){
			console.log(result);
			res.send(result);
		})
	})
})








app.post('/enrollGPSTracker',function(req,res){

    console.log(req.body);
    console.log('inside post') ;
	var encodedData = myContract.methods.setGPSTracker(req.body.longitude,req.body.latitude,req.body.placeName).encodeABI();
	console.log(encodedData);

	var transactionObject = {
		gas : "470000",
		data : encodedData,
		from : account,
		to : contractAddress
	};


	web3.eth.accounts.signTransaction(transactionObject,pkey,function(error,trans){
		console.log(trans);
		web3.eth.sendSignedTransaction(trans.rawTransaction)
		.on("receipt",function(result){
			console.log(result);
			res.send(result);
		})
	})
})






app.get('/getProductDetails',function (req,res){
	console.log("ProductDetails:",req.query);
	myContract.methods.getProductDetails(req.query.productId).call({from:account})
.then(function(result){
	console.log(result);
	res.send("productId:"+result[0]+"</br>"+"vehregisterNum:"+result[1]+"</br>"+"StateId:"+result[2]+"</br>"+"currentinRole:"+result[3]);
});

});




app.get('/getSellerDetails',function (req,res){
	console.log("SellerDetails:",req.query);
	myContract.methods.getSellerDetails(req.query.SId).call({from:account})
.then(function(result){
	console.log(result);
	res.send("name:"+result[0]+"</br>"+"SId:"+result[1]+"</br>"+"Email:"+result[2]+"</br>"+"mobileNumber:"+result[3]+"</br>"+"date:"+result[4]);
});

});




app.get('/getWarehouseDetails1',function (req,res){
	console.log("WarehouseDetails:",req.query);
	myContract.methods.getWarehouseDetails1(req.query.WId).call({from:account})
.then(function(result){
	console.log(result);
	res.send("WId:"+result[0]+"</br>"+"Email:"+result[1]+"</br>"+"mobileNumber:"+result[2]+"</br>"+"packed:"+result[3]+"</br>"+"dispatched:"+result[4]+"</br>"+"outforDelivery:"+result[5]+"</br>"+"date:"+result[6]);
});

});





app.get('/getTransporterDetails',function (req,res){
	console.log("TransporterDetails:",req.query);
	myContract.methods.getTransporterDetails(req.query.TId).call({from:account})
.then(function(result){
	console.log(result);
	res.send("name:"+result[0]+"</br>"+"TId:"+result[1]+"</br>"+"Email:"+result[2]+"</br>"+"mobileNumber:"+result[3]+"</br>"+"date:"+result[4]);
});

});




app.get('/getcustomertrackorder',function (req,res){
	console.log("customertrackorder:",req.query);
	myContract.methods.getcustomertrackorder(req.query.orderId).call({from:account})
.then(function(result){
	console.log(result);
	res.send("orderId:"+result[0]+"</br>"+"location:"+result[1]+"</br>"+"timereach:"+result[2]+"</br>"+"date:"+result[3]);
});

});




app.get('/gettrackStatus',function (req,res){
	console.log("trackStatus:",req.query);
	myContract.methods.gettrackStatus(req.query.currentindistrict).call({from:account})
.then(function(result){
	console.log(result);
	res.send("currentinStrState:"+result[0]+"</br>"+"currentinDesState:"+result[1]+"</br>"+"currentindistrict:"+result[2]+"</br>"+"currentincity:"+result[3]);
});

});




app.get('/getGPSTracker',function (req,res){
	console.log("GPSTracker:",req.query);
	myContract.methods.getGPSTracker(req.query.longitude).call({from:account})
.then(function(result){
	console.log(result);
	res.send("longitude:"+result[0]+"</br>"+"latitude:"+result[1]+"</br>"+"placeName:"+result[2]);
});

});





app.listen(3000,() => {
	console.log("I am listening at post 3000 !");
})




// myCon