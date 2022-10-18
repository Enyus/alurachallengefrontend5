import { supabase } from "../../utils/supaBaseClient";
import produtos from "../../fakeDB/produtos"

export default async function carregarProdutos(req, res) {
    let { data, error } = await supabase
        .from('produtos')
        .select('*, imagens(url)')
        .is('deleted_at', null)
        .order('id', { ascending: true})

    // console.log(data); // [] se não achar
    // console.log(error); // null se não achar

    if (error) {
        console.log(error);
        data = produtos;
        return res.status(401).json({ error: error.message, data})
    }

    return res.status(200).json({ data })
}