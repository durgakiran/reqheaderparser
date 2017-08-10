var express = require('express');
var app = express();

app.listen(3000);

app.use('',function(err,req,res,next){
    if(err) res.end('an error occured');
    next();
});
app.get('',function(req,res,next){
    var output = {};
    output.ipaddress = req.headers['x-forwarded-for'].split(',')[0] || req.connection.remoteAddress;
    output.language = req.headers['accept-language'].split(',')[0];
    output.software = req.headers['user-agent'].split('(')[1].split(')')[0];
  
    res.send(output);
    res.end();
})