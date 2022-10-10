import { supabase } from "../../utils/supaBaseClient";

export default async function teste(req, res) {
    const { id } = req.body;

    let { data, error } = await supabase
        .from('produtos')
        .select('*');

    console.log(data); // [] se não achar
    console.log(error); // null se não achar

    return res.status(200).json({ data })
}