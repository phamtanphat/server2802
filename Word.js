const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://abc:123@server2802-natyt.mongodb.net/test?retryWrites=true', {useNewUrlParser: true});

const Word = mongoose.model('Word', {
    en : {type : String , require : true , unique : true , trim : true},
    vn : {type : String , require : true , trim : true},
    isMemorized : {type : Boolean , require : true , default : false}

});

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));