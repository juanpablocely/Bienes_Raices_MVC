import  express  from 'express'
import usuarioRoutes from './routes/usuarioRoutes.js'

//Clear APP

const app = express()

//Habilitar PUG 
app.set('view engine', 'pug')
app.set('views', './views')


//Rauting
app.use('/auth',usuarioRoutes );

// Carpeta pública
app.use(express.static('public')) 

//Definir un puerto y arrancar el proyecto 
const port = 300;
app.listen(port, () => {console.log(' Servidor funcionando correctamente en el puerto %d', port)
});
