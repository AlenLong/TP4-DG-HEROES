const express = require('express');
const path = require ('path');
const app = express(); //funcion de alto nivel
const port = 3030;
/* recursos estaticos */
app.use(express.static(path.join(__dirname, 'public')));
/* rutas */
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views', 'index.html')));
app.get('/babbage.html', (req, res) => res.sendFile(path.join(__dirname, 'views', 'babbage.html')));
app.get('/berners-lee.html', (req, res) => res.sendFile(path.join(__dirname, 'views', 'berners-lee.html')));
app.get('/clarke.html', (req, res) => res.sendFile(path.join(__dirname, 'views', 'clarke.html')));
app.get('/hamilton.html', (req, res) => res.sendFile(path.join(__dirname, 'views', 'hamilton.html')));
app.get('/hopper.html', (req, res) => res.sendFile(path.join(__dirname, 'views', 'hopper.html')));
app.get('/lovelace.html', (req, res) => res.sendFile(path.join(__dirname, 'views', 'lovelace.html')));
app.get('/turing.html', (req, res) => res.sendFile(path.join(__dirname, 'views', 'turing.html')));
app.get('/paterson.html', (req, res) => res.sendFile(path.join(__dirname, 'views', 'paterson.html')));
app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'views', '404.html')));
/* respuesta del servidor */
app.listen(port, () => console.log(`Servidor levantado con exito en el puerto http://localhost:${port}`));