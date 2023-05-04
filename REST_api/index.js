
const express = require('express');
const app = express();

const PORT = 8000;

app.use(express.json())


app.get('/home' , (req, res)=>{
    res.status(200).send('this is home page !');
})
app.get('/explorePage', (req, res)=>{
    res.status(200).send({
        name : "aman kazi",
        logo : "🤩"
    });

// app.post('/explorePage/:name ', (req, res)=>{
//     const { name } = req.params;
//     const { logo } = req.body;
//     if(!logo){
//         res.status(418).send({ message : "we need a logo !"})
//     }
//     res.status(200){}


// })

})








app.listen(
    PORT,
    ()=> console.log(`alive http://localhost:${ PORT }`)
)