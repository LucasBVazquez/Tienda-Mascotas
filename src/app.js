//requiriendo los paqueres
const express = require("express");
const path = require("path");
const app = express();


//usando los recursos
app.use(express.static("public"))
app.set('views', path.join(__dirname, 'views'));

//poniendo a escuchar al servidor
app.listen(3000, () => console.log(`Servidor corriendo en http://localhost:3000`));


//todas las rutas get
app.get("/", (req, res) => {
    let htmlPath = path.resolve(__dirname, "./views/index.html");
    res.sendFile(htmlPath)
});