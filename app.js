const express = require('express')
const app = express();
const port = process.env.PORT || 3000; 
const path = require('path')
 
app.use(express.static('public'));

app.get('/', (req,res) => {
    res.sendFile(path.resolve('./views/home.html'));
});



app.get ("/register", (req, res)=>{
    res.sendFile(path.resolve("./views/register.html"))
});

app.get ("/login", (req, res)=>{
    res.sendFile(path.resolve("./views/login.html"))
});

app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));

