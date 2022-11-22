const express =require('express')
const app=express()
app.use(express.json())
app.get('/user',(req,res)=>{
    res.send({path:req.path,...req.query})
})

app.post('/user',(req,res)=>{
    let arr=[]
    for (let i in req.body){
        arr.push(req.body[i])
    }
    res.send(arr)
})
app.listen(1255,()=>{
    console.log("Running")
})