import { supabase } from "../../utils/supaBaseClient";

export default async function carregarProdutos(req, res) {
    const {nome, message} = req.body;

    let { data, error } = await supabase
        .from('mensagens')
        .insert([{
            nome,
            message,
        }])

    // console.log(data);
    // console.log(error);

    if (error) {
        console.log(error);
        return res.status(401).json( {error: error.message} )
    }

    return res.status(200).json({ data })
}