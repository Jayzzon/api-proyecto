import Models from "../models";

export default {
    aggPerfil:async(req,res,next)=>{
        try {
          const { usuario, email, password } = req.body;
    
          const agregarPerfil = new Models.Perfil({
            usuario,
            email,
            password,
          });
    
          //agregarProducto.filename=req.file.filename;
          //agregarProducto.path='public/images/'+req.file.filename;
    
          const agregarP = await agregarPerfil.save();
          res.status(200).json(agregarP);
          console.log(req.body);
        } catch (error) {
          res.status(500).send({
            message: "Ocurrio un error al guardar en la BD",
          });
          next(error);
        }
      }
}