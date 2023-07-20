import mongoose,{Schema} from "mongoose";

const perfiles=new Schema({
    usuario:String,
    email:String,
    password:String,
    createdArt:{type:Date, default:Date.now}
});

const Perfil=mongoose.model('perfiles',perfiles);
export default Perfil;