import { supabase } from "../../utils/supaBaseClient";

// Não está funcionando

export default async function carregarProdutos(req, res) {
    const {id} = req.body

    console.log(req.body)

    let { data, error } = await supabase
        .from('produtos')
        .select('*, imagens(url)')
        .eq('id', id)

    // console.log(data); // [] se não achar
    // console.log(error); // null se não achar

    if (error) {
        console.log(error);
        return res.status(401).json({ error: error.message })
    }

    return res.status(200).json({ data })
}