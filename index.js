const express = require('express');

const app = express();

app.get('/cong/:a/:b' , (req, res) => {
    const {a , b} = req.params;
    if(isNaN(a) || isNaN(b)){
        return res.send({success : false , message : "INVALID_TYPE"});
    }
    if(b == 0){
        return res.send({success : false , message : "DIVIDE_BY_ZERO"});
    }
    const result = +a + +b;
    res.send({success : true , result});
})

app.listen('4000' , () => console.log("Server Started"));