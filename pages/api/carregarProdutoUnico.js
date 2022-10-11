import { supabase } from "../../utils/supaBaseClient";

export default async function carregarProdutos(req, res) {

    let { data, error } = await supabase
        .from('produtos')
        .select('*, imagens(url)')

    // console.log(data); // [] se não achar
    // console.log(error); // null se não achar

    if (error) {
        console.log(error);
        return res.status(401).json({ error: error.message })
    }

    return res.status(200).json({ data })
}