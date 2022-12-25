const express = require('express');
const { engine } = require('express-handlebars');

const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));


// HANDLEBALARS ------------------------------

app.set('views', './views');
app.set('view engine', 'handlebars');
app.engine('handlebars', engine());

app.get('/products', (req, res) => {
    res.render('products', { products });
});

// --------------------------------------------

// PUG ----------------------------------------

// app.set('views', './views');
// app.set('view engine', 'pug');

// app.get('/products', (req, res) => {
//     res.render('table.pug', { products });
// });

// --------------------------------------------

// EJS ----------------------------------------

// app.set('views', './views');
// app.set('view engine', 'ejs');

// app.get('/products', (req, res) => {
//     res.render('table.ejs', { products });
// });

// --------------------------------------------


/*
CONCLUSIÓN-------------------------------------
SI ME PREGUNTAN CUAL DE LOS TRES MOTORES
DE PLANTILLA PREFIERO, YO ME QUEDO CON HANDLEBARS
POR LA MANERA EN LA QUE SE ESTRUCTURA EL CODIGO,
ME PARECE LA MAS PROLIJA Y LA MAS SENCILLA DE VISUALIZAR.

POR OTRO LADO ME ENCANTO EL MINIMALISMO DE PUG ME GUSTARIA
PERO SIENTO QUE NECESITO CODEAR MAS CON ESE MOTOR PARA NO
NO CONFUNDIRME YA QUE NO SE USAN LAS LLAVES DE CIERRE Y ESO
EN PROYECTOS MUY GRANDES PUEDE LLEGAR A SER CONFUSO
*/

const products = [];

app.post('/products', (req, res) => {
    const newID = products.length + 1;
    
    const productToAdd = req.body;
    const newProduct = {'id':newID, ...productToAdd};
    products.push(newProduct);
    res.redirect('/');  
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Listening in port ${PORT}`));
