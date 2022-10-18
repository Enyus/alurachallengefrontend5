import { supabase } from "../../utils/supaBaseClient";

export default async function deletarProduto(req, res) {
    const {id} = req.body;

    let data_deletou = new Date();
    data_deletou = data_deletou.toISOString();
    // console.log(data_deletou);

    let { error } = await supabase
        .from('produtos')
        .update({deleted_at: data_deletou})
        .eq('id', id)

    // console.log(error);

    if (error) {
        console.log(error);
        return res.status(401).json( {error: error.message} )
    }

    return res.status(200).json({ })
}