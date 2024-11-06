// const jsonServer = require("json-server"); // importing json-server library
// const server = jsonServer.create();
// const router = jsonServer.router("db.json");
// const middlewares = jsonServer.defaults();
// const port = process.env.PORT || 8080; //  chose port from here like 8080, 3001

// server.use(middlewares);
// server.use(router);

// server.listen(port);
const express = require("express");
const users = require('./db.json');
const app = express();
const PORT = process.env.PORT || 8000;
const cors = require('cors');
const corsOptions ={
    origin:['http://localhost:4200', 'https://spygizmo.netlify.app'], 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
// app.use(express.json());

app.get('/api/products',(req,res)=>{
    return res.json(users);
})





app.listen(PORT,() =>console.log(`Server Started at PORT:${PORT}`));
