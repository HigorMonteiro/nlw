// Servidor
const express = require('express')
const server = express()

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require ('./pages')

// Configurar Nunjucks (Template Engining)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true, 
})

// Inicio e Configuração do Servidor
server
// receber os dados do req.body
.use(express.urlencoded ({ extended:true}))
.use(express.static("public"))
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
// Start do Servidor
.listen(5500)