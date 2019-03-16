const mongoose = require('mongoose');
mongoose.connect('mongodb://abc:A123456&@ds245772.mlab.com:45772/server2802', {useNewUrlParser: true});

const Word = mongoose.model('Word', {
    en : {type : String , require : true , unique : true , trim : true},
    vn : {type : String , require : true , trim : true},
    isMemorized : {type : Boolean , require : true , default : false}

});

module.exports = {Word};

//SELECT
// Word.find({})
// .then(words => console.log(words));


//INSERT
// const newWord = new Word({en : 'Two' , vn : 'Hai'});
// newWord.save()
// .then(w => console.log(w))
// .catch(error => console.log(error));

//UPDATE
// Word.findByIdAndUpdate('5c8cbb81954a22079ccdfc1f', {isMemorized : false} ,{new : true})
// .then(w => console.log(w))
// .catch(error => console.log(error));

//DELETE
// Word.findByIdAndDelete('5c8cbb81954a22079ccdfc1f')
// .then(w => console.log(w))
// .catch(error => console.log(error));