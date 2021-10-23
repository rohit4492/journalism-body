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
const articleSchema = new Schema ({
    title:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    date:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    shortdescription:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    trending:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        required:true
    },
    month:{
        type:String,
        required:true
    },
    comments:[commentSchema]
});
// articleSchema.plugin(require('mongoose-autopopulate'));
module.exports= mongoose.model('Article',articleSchema);