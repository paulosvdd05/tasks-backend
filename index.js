const express = require('express')
const app = express()

//cosign

app.get('/', (req, res) => {
    res.status(200).send('Meu Backend')
})

app.listen(3000, () =>{
    console.log('backend executando...');
})