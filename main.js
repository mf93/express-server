var express = require('express'),
    app = express.createServer(),
    fs= require('fs');

app.get('/', function(req, res)
{
    directToPage(res,'/index.html');
});
app.get(/\.(js|css|htm|html)$/,function(req,res)
{
    console.log(req.url);
    directToPage(res,req.url);
    console.log("ok");
});

app.listen(8080);

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