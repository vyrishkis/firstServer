let http = require("http")

let servApp = http.createServer(function(req,res){
    console.log(req.url); // rodo užklausiama urla
    if (req.url == "/"){
        res.end("sveiki pas mus saite")
    }
    if (req.url == "/about"){
        res.end("dekui kad domites musu kompanija")

    } 
    res.end("nerandam saito")
})
servApp.listen(3000)
