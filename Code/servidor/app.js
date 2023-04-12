import express from "express";
import logger from "morgan";
import cors from "cors";
import path from "path";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import { SerialPort, ReadlineParser } from "serialport";
import alarma from "./models/alarma";
import moment from "moment/moment";
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var alertaRouter = require("./routes/alerta");

mongoose.set("strictQuery", false);
require("dotenv").config();

//Conexion DB
const uri = process.env.MONGO_URL;
const options = { useNewUrlParser: true };

mongoose.connect(uri, options).then(
  (client) => {
    console.log("Conectado a DB");
  },
  (err) => {
    console.log(err);
  }
);

//Puerto serial del usb
const puertoSerial = "COM4";
// Crear la conexión serial con Arduino
const port = new SerialPort({ path: puertoSerial, baudRate: 9600 });
const parser = port.pipe(new ReadlineParser({ delimiter: "\n" }));

// Escuchar los datos del sensor PIR
parser.on("data", (data) => {
  const pirValue = parseInt(data); // Convertir el valor recibido a número entero
  console.log("Valor del sensor PIR:", pirValue);
  if(pirValue==1){
    const fechaChile = moment().utcOffset('-04:00');
    const fecha = fechaChile.format("DD/MM/YYYY");
    const tiempo = fechaChile.format("HH:mm:ss");
    const hora = fechaChile.format("HH");
    const minuto = fechaChile.format("mm");
    const segundo = fechaChile.format("ss");
    const nuevaAlerta = alarma({fecha: fecha,tiempo: tiempo,hora:hora,minuto:minuto,segundo:segundo})
    nuevaAlerta.save().then(()=>{
        console.log("Nueva alerta guardada en la bd")    
    }).catch((err) => {
        console.error('Error al guardar la fecha en MongoDB:', err);
    })
  }
});

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/alerta", alertaRouter);
//Puerto del server
const appPort = process.env.PORT_SERVER || 3030;

app.listen(appPort, () =>
  console.log(`Server esuchando en el puerto ${appPort}!`)
);

module.exports = app;
