import Express from "express"
const items = []
const app = Express() 
app.use(Express.json())
app.get("/",()=>{

    res.send("Silence is golden.")
    res.end()
})
app.route("/view").post((req,res)=>{

    items.push(req.body.content); 
    res.json({id:items.length-1})
}).get((req,res)=>{

    const content = items[req.params.id]  
    res.send(content)
    res.end()

})
