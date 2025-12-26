import express from 'express' 
import colors from 'colors'
import routes  from './routes'
import  cors, { CorsOptions } from 'cors'

import db from './config/db'

// Conectar a base de datos
async function connectDB() {
    try {
        await db.authenticate()
        db.sync()
        console.log( colors.blue( 'Conexión exitosa a la BD'))
    } catch (error) {
        // console.log(error)
        console.log( colors.red.bold( 'Hubo un error al conectar a la BD') )
    }
}
connectDB()

// Instancia de express
const server = express()

// permitir conexxiones
// const corsOptions : CorsOptions = {
//     origin: function(origin,callback){
//         console.log(origin)
//     }
// }
// server.use(cors(corsOptions))

server.use(cors({
  // origin: process.env.FRONTEND_URL || 'http://localhost:4200',
  origin: process.env.FRONTEND_URL || 'https://pdc-frontend-psi.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));


// Leer datos de formularios
server.use(express.json())

// // CORS
// server.use(cors({
//   origin: process.env.FRONTEND_URL || 'http://localhost:4200',
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
//   credentials: true
// }));


server.use('/api', routes);

export default server