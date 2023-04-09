import alarma from "../models/alarma";

//Metodo para obtener un archivo mediante su id
const query = async (req, res, next) => {
  try {
    const reg = await alarma.find();
    if (!reg) {
      res.status(404).send({
        message: "No existe ningún registro",
      });
    } else {
      res.status(200).json(reg);
    }
  } catch (e) {
    res.status(500).send({
      message: "Ocurrio un error",
    });
    next(e);
  }
};

//Metodo para obtener un archivo mediante su id
const queryDia = async (req, res, next) => {
  try {
    const { dia } = req.body;
    const reg = await alarma.find({ fecha: dia }).count();
    if (!reg) {
      res.status(404).send({
        message: "No existe ningún registro",
      });
    } else {
      res.status(200).json(reg);
    }
  } catch (e) {
    res.status(500).send({
      message: "Ocurrio un error",
    });
    next(e);
  }
};

//Metodo para obtener un archivo mediante su id
const queryHora = async (req, res, next) => {
  try {
    const { dia } = req.query;
    console.log(dia)
    var arreglo = [];

    // Llenar el arreglo con números en formato de 00 a 23
    for (var i = 0; i <= 23; i++) {
      // Convertir el número a una cadena de texto y agregarle un 0 al principio si es menor a 10
      var numero = i < 10 ? "0" + i : "" + i;
      const conteo = await alarma.find({ fecha: dia, hora: numero }).count();
      // Agregar el número al arreglo
      arreglo.push(conteo);
    }

    // Imprimir el arreglo
    // console.log(arreglo);
    
    
    

    res.status(200).send(arreglo);
  } catch (e) {
    res.status(500).send({
      message: "Ocurrio un error",
    });
    next(e);
  }
};

module.exports = {
  query,
  queryDia,
  queryHora,
};
