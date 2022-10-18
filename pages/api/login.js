import { supabase } from "../../utils/supaBaseClient";
import usuarios from "../../fakeDB/usuarios"

export default async function login(req, res) {
    const {email, password} = req.body;

    let { data, error } = await supabase
        .from('usuarios')
        .select('*')
        .eq('email', email)

    // console.log(data); // [] se não achar
    // console.log(error); // null se não achar

    if (error) {
        console.log(error);
        console.log("supabase não acessado, usando fakeDB")
        data = usuarios.filter( usuario => usuario.email == email);
    }

    console.log(data)

    if( data.length < 1 || data[0].senha != password) {
        data = []
        return res.status(401).json( {error: "Usuário ou senha não encontrados", data} )
    }

    return res.status(200).json({ data })
}