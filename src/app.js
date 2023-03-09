import  express, { urlencoded }  from "express";
import morgan from "morgan";
import cors from "cors";
import './database.js';
import portafolioRoutes from "./routes/portafolio.route.js";
import mensajeRoutes from "./routes/contacto.route.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(urlencoded({extended:false}))
app.use(morgan('dev'));

app.use('/contacto',mensajeRoutes);
app.use(portafolioRoutes);

app.listen(8080,() => {
    console.log('Puerto corriendo en el servidor',8080);
})