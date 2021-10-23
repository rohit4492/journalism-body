const mongoose = require('mongoose');
// mongoose.set('useNewUrlParser', true);
// mongoose.set('useUnifiedTopology', true);
const Schema = mongoose.Schema;

const commentSchema = new Schema ({
    name:{
        type:String,
        required:true
    },
    comment:{
        type:String,
        required:true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }

});

module.exports = mongoose.model('Comment', commentSchema)