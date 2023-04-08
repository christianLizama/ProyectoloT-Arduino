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

module.exports = {
  query,
};