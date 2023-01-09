import express from 'express'
import bodyParser from 'body-parser';

const app = express();
const PORT = 8080;

app.use('/', express.static("frontend"));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const productos = [
    {
        id: 1,
        nombre: "papa",
        precio: 1000,
        imagen: "imagenes/papa.jpg",
        stock: 5
    },
    {
        id: 2,
        nombre: "berenjena",
        precio: 1200,
        imagen: "imagenes/berenjena.jpg",
        stock: 5
    },
    {
        id: 3,
        nombre: "pepino",
        precio: 900,
        imagen: "imagenes/pepino.jpg",
        stock: 5
    },
    {
        id: 4,
        nombre: "tomate",
        precio: 1000,
        imagen: "imagenes/tomate.jpg",
        stock: 5
    },
    {
        id: 5,
        nombre: "zanahoria",
        precio: 1100,
        imagen: "imagenes/zanahoria.jpg",
        stock: 5
    }
]

app.get("/api/productos", (req, res) => {
    res.send(productos);
})

app.post ("/api/pay", (req, res) => {
   const ids = req.body;
   ids.forEach(id => {
        const producto = productos.find(p => p.id === id);
        producto.stock--;    
   });
    res.send(productos);
})



app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})