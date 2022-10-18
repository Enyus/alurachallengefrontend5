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

    console.log(data);
    // console.log(error);

    if (error) {
        console.log(error);
        return res.status(401).json( {error: error.message} )
    }

    // let {data2, error2} = await supabase
    //     .from('imagens')
    //     .insert([{
    //         produto_id: id,
    //         url: urlImagem
    //     },{
    //         produto_id: id,
    //         url: urlImagem
    //     }]);
    
    // if (error2) {
    //     console.log(error);
    //     return res.status(401).json( {error: error.message} )
    // }

    return res.status(200).json({ data })
}