const express = require('express')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 4000
const app = express()
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json()) 
app.use(express.urlencoded({ extended: true }));




//app.get('/' , (req , res)=> res.send(JSON.stringify(req.headers)))


 // GET https://localhost:4000/search?keyword=great-white


 app.get('/search', (req, res) => {
     const firstname = req.query.firstname || "isaac";
     const lastname = req.query.lastname || "dahan";

     console.log(firstname , lastname)
     res.json({"firstname" : firstname,"lastname" : lastname
    })
  })

// GET https://localhost:4000/8

app.get('/users/:userid', (req, res) => {
    const {userid} = req.params
    console.log(req.params.userid) // "1"
    res.end(`end of game ${userid}`)
  })


  // POST https://localhost:4000/login

  app.post('/login', (req, res) => {
    //const  = req.body.name
    //   console.log("post request")
     console.log(req.body.email) // "user@example.com"
     console.log(req.body.password) // "helloworld"
    res.json({"requestBody" : req.body,
              "contentType" : req.header('Content-Type'),
              "UserAgent" : req.header('User-Agent'),
              "connection" : req.header('connection'),
              "content-length" : req.header('content-length'),
              "keep-alive" : req.header('keep-alive'),
              "date" : req.header('date'),
              //"Authorization" : req.header('Authorization'),
  }) 
  })

  //headers
  app.get('/creatures',(req , res)=>{
    res.json({"protocol" : req.protocol,
  "hostname" : req.hostname,
  "path" : req.path,
  "url" : req.originalUrl,
  "subDomains" : req.subdomains,
  "method": req.method,

  "contentType" : req.header('Content-Type'),
              "UserAgent" : req.header('User-Agent'),
              "connection" : req.header('connection'),
              "content-length" : req.header('content-length'),
              "keep-alive" : req.header('keep-alive'),
              "host" : req.header('Host'),
              "cacheControl" : req.header('Cache-Control'),
              "AcceptLanguage" : req.header('Accept-Language'),
              "Accept" : req.header('Accept'),
              "date" : req.header('date'),
})
  })

  app.get('/reqHeaders' ,(req , res)=>{
    res.json({'requestRawHeaders' : req.rawHeaders})
  } )

  app.get('/resHeaders' ,(req , res)=>{
    res.status(200).json({"response" : "ok"})  } )

 


app.listen(PORT , ()=> console.log(`Listen on port ${PORT}`));