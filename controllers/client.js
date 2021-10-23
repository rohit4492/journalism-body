const Articles = require('../models/article');
const Authors = require('../models/author');
const Comments = require('../models/comments');


exports.getHome = (req,res,next) => {
    Articles.find()
    .then(articles =>{
        console.log(req.user);
        res.render('client/home.ejs' , {
            pageTitle: 'journalism body',
            path : '/',
            user: req.user,
            isLogged: req.isAuthenticated(),
            articles : articles
        });
    })
    .catch(err=>{
        console.log(err);
    })
};

exports.getArticle = (req,res,next) =>{
    const artid = req.params.articleid;
    Articles.findById(artid)
    .then(article =>{
        console.log(article);
        res.render('client/article.ejs' , {
            pageTitle: article.title,
            path : '/',
            user: req.user,
            isLogged: req.isAuthenticated(),
            article : article
        });
    })
    .catch(err=>{
        console.log(err);
    })
};

exports.getAbout = (req,res,next) =>{
    res.render('client/about.ejs' , {
        pageTitle: 'About',
        user: req.user,
        isLogged: req.isAuthenticated(),
        path : '/about',
    });
};


exports.getAlumni = (req,res,next) =>{
    Articles.find()
    .then(articles =>{
        res.render('client/alumni.ejs' , {
            pageTitle: 'Alumni Articles',
            path : '/alumni',
            user: req.user,
            isLogged: req.isAuthenticated(),
            articles : articles
        });
    })
    .catch(err=>{
        console.log(err);
    })
};

exports.getAuthors = (req,res,next) =>{
    Authors.find()
    .then(authors =>{
        res.render('client/author.ejs' , {
            pageTitle: 'Authors',
            path : '/author',
            user: req.user,
        isLogged: req.isAuthenticated(),
            authors : authors
        });
    })
    .catch(err=>{
        console.log(err);
    })
};

exports.getTech = (req,res,next) =>{
    Articles.find()
    .then(articles =>{
        res.render('client/tech.ejs' , {
            pageTitle: 'Tech Articles',
            user: req.user,
        isLogged: req.isAuthenticated(),
            path : '/institute',
            articles : articles
        });
    })
    .catch(err=>{
        console.log(err);
    })
};

exports.getSports = (req,res,next) =>{
    Articles.find()
    .then(articles =>{
        res.render('client/sports.ejs' , {
            pageTitle: 'Sports Articles',
            user: req.user,
        isLogged: req.isAuthenticated(),
            path : '/institute',
            articles : articles
        });
    })
    .catch(err=>{
        console.log(err);
    })
};

exports.getCult = (req,res,next) =>{
    Articles.find()
    .then(articles =>{
        res.render('client/cult.ejs' , {
            pageTitle: 'cult Articles',
            user: req.user,
        isLogged: req.isAuthenticated(),
            path : '/institute',
            articles : articles
        });
    })
    .catch(err=>{
        console.log(err);
    })
};

exports.postComment = (req,res,next) =>{
    const artid = req.body.artId;
    
    const comment = req.body.comment;
    const name = req.user.displayName;


    const commet = new Comments ({
        comment : comment,
        name : name

    })

    commet.save()
    .then(result =>{
        const query = { _id : artid };
        
        Articles.findByIdAndUpdate(artid,{$push:{ comments : result}},function (err, comme){
                if(err)
                {
                    console.log(err);
                }
        });
        console.log(artid);
        res.redirect('/');
    })
    .catch(err=>{
        console.log(err);
    });

   
}


exports.getAuthor = (req,res,next) =>{
    const autid = req.params.authorid;
    // Authors.
    //   findOne({ _id: autid }).
    //   populate('Authors.articles').
    //   exec(function (err, story) {
    //     if (err)
    //     {
    //         console.log(err);
    //     }
    //     console.log(story.articles[1].title);
        
    //   });

    Authors.findById(autid)
    .then(author =>{
        // console.log(author);
        res.render('client/author-list.ejs' , {
            pageTitle: author.name,
            path : '/',
            user: req.user,
        isLogged: req.isAuthenticated(),
            author : author
        });
    })
    .catch(err=>{
        console.log(err);
    })
};
