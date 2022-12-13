/* Importar nuestras dependencias */
import express from 'express'

/* Asignar nuestras constantes */
const app = express()

app.use(express.static('public'))

/* ------------------------------------------------------ */
/* Server Listen */
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))
