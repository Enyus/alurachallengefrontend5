import { supabase } from "../../utils/supaBaseClient";
import usuarios from "../../fakeDB/usuarios"

export default async function cadastrarProduto(req, res) {
    const {urlImagem, categoria, produto, preco, descricao} = req.body;

    let { data, error } = await supabase
        .from('produtos')
        .insert([{
            produto,
            preco,
            categoria,
            descricao
        }])

    // console.log(data);
    // console.log(error);

    if (error) {
        console.log(error);
        return res.status(401).json( {error: error.message} )
    }

    let {data2, error2} = await supabase
        .from('imagens')
        .insert([{
            produto_id: data[0].id,
            url: urlImagem
        },{
            produto_id: data[0].id,
            url: urlImagem
        }]);
    
    if (error2) {
        console.log(error);
        return res.status(401).json( {error: error.message} )
    }

    return res.status(200).json({ data, data2 })
}