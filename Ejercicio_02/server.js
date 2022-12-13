/* Llamando dependencias */
import express from 'express'
import fs from 'fs'

/* Declarar nuestras constantes */
const app = express()

app.engine('cte', (filePath, options, cb) => {
    fs.readFile(filePath, function(err, content) {
        var rendered = content.toString()
        for(let key in options) {
            if(typeof options[key] == 'string' || typeof options[key] == 'number') {
                rendered = rendered.replace(`^^${key}`, `${options[key]}`)
            }
        }
        return cb(null, rendered)
    });
});

/* Declarar vistas y cargar datos en ellas */

app.set('views', './views');
app.set('view engine', 'cte');

app.get('/cte1', (req, res) => {
    res.render('plantilla1', { titulo: 'Custom Template Engine', mensaje: 'Lorem Ipsum....', autor: 'Juan', version:'1.0.0' });
});

app.get('/cte2', (req, res) => {
    res.render('plantilla2', {nombre: 'Gonzalo', apellido: 'Romano', FyH: new Date().toLocaleString() });
})

/* Configurar el servidor */
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log('Tu servidor esta funcionando en el puerto: ', PORT);
})
server.on('error', error => console.log('Error en el servidor', error));