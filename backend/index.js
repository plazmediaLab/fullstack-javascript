if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config();
}

const express = require('express');
const morgan = require('morgan'); // Visualizar peticiones por consola
const multer = require('multer'); // Subir archivos al servidor
const path = require('path'); // Directorios dentro del proyecto

// Iniatialization
const app = express();
require('./database');

// Settings
app.set('port', process.env.PORT || 3000); 

// Middlewares
app.use(morgan('dev'));
storage = multer.diskStorage({
  destination: path.join(__dirname, 'public/uploads'),
  filename(req, file, cb){
    cb(null, new Date().getTime() + path.extname(file.originalname));
  } 
});
app.use(multer({storage}).single('image'));
app.use(express.urlencoded({extended: false})); // Comprender los datos enviados de un formulario.
app.use(express.json()); // Trabajar con archivos JSON

// Routes
app.use('/api/books', require('./routes/books.js'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(app.get('port'), ()=>{
  console.log('Server on port', app.get('port'));
})

// node backend/index.js => Iniciamos por consola el servidor
// nodemon backend/index.js => Iniciamos por consola el servidor, con nodemon

// Pra el caso de que no funcione, utilizamos:
// npx nodemon backend/index.js => Ya que nodemon no esta intalado de forma global.

// Si ya esta configurado en "package.json", en la sección "scripts"
// Configuramos el comando "dev": "nodemon backend/index.js"
// Y ejecutamos ahora en consola $ npm run dev