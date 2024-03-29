const express = require('express')
const app = express(); 
const path = require('path')
const port = process.env.PORT || 3000;
app.use(express.static('public'));

app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname,'./src/views/home.html'));
});



app.get ("/register", (req, res)=>{
    res.sendFile(path.resolve(__dirname,"./src/views/register.html"))
});

app.get ("/login", (req, res)=>{
    res.sendFile(path.resolve(__dirname,"./src/views/login.html"))
});

app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));

