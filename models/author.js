const mongoose = require('mongoose');
// mongoose.set('useNewUrlParser', true);
// mongoose.set('useUnifiedTopology', true);

const Schema = mongoose.Schema;

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
    }
});

const authorSchema = new Schema ({
    name:{
        type:String,
        required:true
    },
    shortbio:{
        type:String,
        required:true
    },
    bio:{
        type:String,
        required:true
    },
    articles:[
        // {
        
        //     type : Schema.Types.ObjectId,
           
        //     ref : 'article'

        //  }
        articleSchema
        ]
        
   
});
// authorSchema.plugin(require('mongoose-autopopulate'));
module.exports= mongoose.model('Author',authorSchema);