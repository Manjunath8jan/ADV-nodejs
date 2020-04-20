const express = require('express');
const cluster = require('express-cluster');
const util = require('util')

cluster(function(worker){
    let app = express();
    app.get('/',function(req, res){
        console.log('current worker'+worker.id)
        res.send(`hello from worker ${worker.id}`);
    })
    return app.listen(3000);
}, {count: 5})