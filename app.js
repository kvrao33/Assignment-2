const express =require('express')
const app=express()
app.use(express.json())
app.get('/user/:id/:name',(req,res)=>{
    res.send({path:req.query,params:req.params})
})

app.post('/user',(req,res)=>{
    let arr=[]
    for (let i in req.body){
        arr.push(req.body[i])
    }
    res.send(arr)
})
app.listen(1355,()=>{
    console.log("Running")
})