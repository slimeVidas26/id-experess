const express = require('express')
const cors = require('cors');
const { default: axios } = require('axios');
const PORT = process.env.PORT || 4000
const app = express()

app.use(cors());
app.use(express.json())


app.get('/' , (req , res)=> res.send("Homepage"))

// app.get('/text' , (req , res)=>{
//   res.send("Nodes && React")

// })


app.get('/api' , (req , res)=>{
  const user = req.query.user || "slimeVidas26"
   axios.get(`https://api.github.com/users/${user}`)
   .then((response)=>{
     res.json({user : response.data})
   })

})




app.listen(PORT , ()=> console.log(`Listen on port ${PORT}`))