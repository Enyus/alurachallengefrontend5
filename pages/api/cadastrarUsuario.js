import { supabase } from "../../utils/supaBaseClient";
import usuarios from "../../fakeDB/usuarios"

export default async function cadastrarUsuario(req, res) {
    const {email, user, password} = req.body;

    let { data, error } = await supabase
        .from('usuarios')
        .insert([{
            email,
            user,
            senha: password
        }])

    // console.log(data);
    // console.log(error);

    if (error) {
        console.log(error);
        return res.status(401).json( {error: error.message} )
    }

    return res.status(200).json({ data })
}