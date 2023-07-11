import  express  from 'express'
import { formularioLogin,formulariorRegistro } from '../controllers/usuarioController.js'

//Crear APP
const router = express.Router();

//Routing

//Método GET
// router.get('/', (req,res) => {
//     res.json({msg:'CR7'+'    '+'SIUUUUUUUUUUUUUUUUUUUUUUUUU'})
// });
///Método POST 
// router.post('/', (req,res) => {
//     res.json({msg: 'SIUUUUUUUUUUUUUUUUUUUUUUUUU'})
//  });

// Otra forma de implementarlo
// router.route('/')
//     .get(function(req,res){
//     res.json({msg:'CR7'+'    '+'SIUUUUUUUUUUUUUUUUUUUUUUUUU'})
//     })
//     .post(function(req,res){
//     res.json({msg: 'SIUUUUUUUUUUUUUUUUUUUUUUUUU'})
//     });


//Template engine 

router.get('/login', formularioLogin);

router.get('/registro',formulariorRegistro);


//Definir un puerto y arrancar el proyecto 

export default router