const express =require('express')
const app=express()
app.use(express.json())

//GET api endpoint to send query params and path params
app.get('/user/:id/:name',(req,res)=>{
    res.send({path:req.query,params:req.params})
})

//POST api endpoint to send user data in an array
app.post('/user',(req,res)=>{
    let arr=[]
    for (let i in req.body){
        arr.push(req.body[i])
    }
    res.send(arr)//sending response with a request body data in 
})
app.listen(1355,()=>{
    console.log("Running")
})