import { supabase } from "../../utils/supaBaseClient";

export default async function cadastrarProduto(req, res) {
    const {id, urlImagem, categoria, produto, preco, descricao} = req.body;

    let { data, error } = await supabase
        .from('produtos')
        .update({
            produto,
            preco,
            categoria,
            descricao
        })
        .eq('id', id)
        .select();

    // console.log(data);
    // console.log(error);

    if (error) {
        console.log(error);
        return res.status(401).json( {error: error.message} )
    }

    let {error2} = await supabase
        .from('imagens')
        .update({
            url: urlImagem
        })
        .eq('produto_id', id);
    
    if (error2) {
        console.log(error2);
        return res.status(401).json( {error: error2.message} )
    }

    return res.status(200).json({ data })
}