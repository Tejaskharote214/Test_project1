const express = require("express");
const app = express();

app.use(logger);


app.get ("/books",function(req,res){
    res.send({route :"/books"});
});

app.get("/libraries",function (req,res){
    res.send({route : "/libraries",permission : true});
});

app.get("/authors",function(req,res){
    res.send({route : "/authors",permission:true});
});

function logger(req,res,next)
{
    if(req.path === "/books")
    {
        req.role = "anyone";
    }
    else if(req.path === "/libraries")
    {
        req.role = "librarian"
    }
    else if(req.path === "/authors")
    {
        req.role = "author"
    }
    console.log("logger middleware");
    next();
}

function chekckpermission(permission)
{
    return function logger(req,res,next)
    {
        if(permission === true)
        {
            // res.send("iamauthor");

            return next();

        }
        return res.send("Not a valid request")
    };
}

app.listen(0214,()=>{
    console.log("listening to 0214");
});