const mongoose = require('mongoose');
// mongoose.set('useNewUrlParser', true);
// mongoose.set('useUnifiedTopology', true);
const Schema = mongoose.Schema;

const trendingSchema = new Schema ({
    title:{
        type:String,
        required:true
    },
    imageUrl:{
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
    month:{
        type:String,
        required:true
    }
});

module.exports= mongoose.model('Trending',trendingSchema);