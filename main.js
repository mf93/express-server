var express = require('express'),
    app = express.createServer(),
        request= require('request');



app.use(express.static(__dirname + '/'));
app.use(express.bodyParser());

app.listen(8080);
app.all('/proxy', function(req,res)
{
    var urlParts= req.url.split('?');
    var linkParts=urlParts[1].split('=');
    console.log(linkParts[1]);
   request(linkParts[1],function(error,response,body)
   {
       res.send(body);
   });
    //res.write(response);
});

/*app.get('/proxy', function(req, res)
{
    console.log(req);
    res.send('correct');
});*/


/*
app.get(/\.(js|css|htm|html)$/,function(req,res)
{
    console.log(req.url);
    directToPage(res,req.url);
    console.log("ok");
});

function directToPage(resource,rurl)
{
    console.log(rurl);
    fs.readFile('.'+rurl,"utf8", function(err,html)
    {
        if(err)
        {
            resource.writeHead(404);
            resource.write("404 not found "+rurl);
            resource.end();
        }
        else
        {
            resource.write(html);
            resource.end();
        }
    });
}
    */