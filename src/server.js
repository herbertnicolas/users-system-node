const app = require('express')();

app.listen(3001, () => console.log("rodando"));
app.get('/signup', (req, res)=>{
    res.send('teste node');
})