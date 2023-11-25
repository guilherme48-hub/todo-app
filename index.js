const express = require("express")
const exphbs = require("express-handLeabars")

const app = express()
app.engine('hendLeabars', exphbs())
app.set("view engine", 'hendleabars')

app.get('/', (requisicao,resposta) => {
    resposta.send("ola mundo")
})

app.listen(3000, () =>{
    console.log("servidor rodando na porta 3000")
})