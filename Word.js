const mongoose = require('mongoose');
mongoose.connect('mongodb://abc:A123456&@ds245772.mlab.com:45772/server2802', {useNewUrlParser: true});

const Word = mongoose.model('Word', {
    en : {type : String , require : true , unique : true , trim : true},
    vn : {type : String , require : true , trim : true},
    isMemorized : {type : Boolean , require : true , default : false}

});

Word.find({})
.then(words => console.log(words));