const express = require('express');
const {Word} = require('./Word');
const {json} = require('body-parser');

const app = express();

app.use(json());

app.get('/word' , (req, res) => {
    Word.find({})
    .then(words => res.send({success : true , words}));
})
app.post('/word' , (req, res) => {
    const {en , vn} = req.body
    const newWord = new Word({en , vn });
    newWord.save()
    .then(w => {
        if(!w) return res.send({success : false , message : "CANNOT_ADD_WORD"})
        res.send({success : true , w})
    })
    .catch(error => res.send({success : true , message : "CANNOT_ADD_WORD"}));
})

app.put('/word/:_id' , (req, res) => {
    const {_id} = req.params
    const {isMemorized} = req.body;
    Word.findByIdAndUpdate(_id, {isMemorized} ,{new : true})
    .then(w => res.send({success : true , w}))
    .catch(error => res.send({success : false , message : error.message}));
})

app.listen('4000' , () => console.log("Server Started"));

// mongodb+srv://abc:123@server2802-natyt.mongodb.net/test?retryWrites=true