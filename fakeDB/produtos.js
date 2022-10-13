const produtos = [
    {
        id: 1,
        produto: 'FakeDB - Caneca Stormtrooper',
        preco: 6000,
        categoria: 'starwars',
        descricao: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
        imagens: [{url: '/produtos/produto_1_1x.png'}, {url:'/produtos/produto_1_3x.png'}]
    },
    {
        id: 2,
        produto: 'FakeDB - Busto Star Wars',
        preco: 6000,
        categoria: 'starwars',
        descricao: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
        imagens: [{url: '/produtos/produto_2_1x.png'}, {url: '/produtos/produto_2_3x.png'}]
    },
    {
        id: 3,
        produto: 'FakeDB - Boneco Yoda',
        preco: 6000,
        categoria: 'starwars',
        descricao: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
        imagens: [{url: '/produtos/produto_3_1x.png'}, {url: '/produtos/produto_3_3x.png'}]
    },
    {
        id: 4,
        produto: 'FakeDB - Boneco Storm Trooper',
        preco: 6000,
        categoria: 'starwars',
        descricao: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
        imagens: [{url: '/produtos/produto_4_1x.png'}, {url: '/produtos/produto_4_3x.png'}]
    },
    {
        id: 5,
        produto: 'FakeDB - Boneco Baby Yoda',
        preco: 6000,
        categoria: 'starwars',
        descricao: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
        imagens: [{url: '/produtos/produto_5_1x.png'}, {url: '/produtos/produto_5_3x.png'}]
    },
    {
        id: 6,
        produto: 'FakeDB - Boneco Kylo Ren',
        preco: 6000,
        categoria: 'starwars',
        descricao: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
        imagens: [{url: '/produtos/produto_6_1x.png'}, {url: '/produtos/produto_6_3x.png'}]
    },
    {
        id: 7,
        produto: 'FakeDB - Controle X-Box',
        preco: 6000,
        categoria: 'consoles',
        descricao: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
        imagens: [{url: '/produtos/produto_7_1x.png'}, {url: '/produtos/produto_7_3x.png'}]
    },
    {
        id: 8,
        produto: 'FakeDB - Play Station 5',
        preco: 6000,
        categoria: 'consoles',
        descricao: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
        imagens: [{url: '/produtos/produto_8_1x.png'}, {url: '/produtos/produto_8_3x.png'}]
    },
    {
        id: 9,
        produto: 'FakeDB - Nintendo NES',
        preco: 6000,
        categoria: 'consoles',
        descricao: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
        imagens: [{url: '/produtos/produto_9_1x.png'}, {url: '/produtos/produto_9_3x.png'}]
    },
    {
        id: 10,
        produto: 'FakeDB - Controle Switch',
        preco: 6000,
        categoria: 'consoles',
        descricao: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
        imagens: [{url: '/produtos/produto_10_1x.png'}, {url: '/produtos/produto_10_3x.png'}]
    },
    {
        id: 11,
        produto: 'FakeDB - X-box Series S',
        preco: 6000,
        categoria: 'consoles',
        descricao: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
        imagens: [{url: '/produtos/produto_11_1x.png'}, {url: '/produtos/produto_11_3x.png'}]
    },
    {
        id: 12,
        produto: 'FakeDB - Gameboy',
        preco: 6000,
        categoria: 'consoles',
        descricao: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
        imagens: [{url: '/produtos/produto_12_1x.png'}, {url: '/produtos/produto_12_3x.png'}]
    },
    {
        id: 13,
        produto: 'FakeDB - Camiseta Logo Atari',
        preco: 6000,
        categoria: 'diversos',
        descricao: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
        imagens: [{url: '/produtos/produto_13_1x.png'}, {url: '/produtos/produto_13_3x.png'}]
    },
    {
        id: 14,
        produto: 'FakeDB - Camiseta Controle Atari',
        preco: 6000,
        categoria: 'diversos',
        descricao: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
        imagens: [{url: '/produtos/produto_14_1x.png'}, {url: '/produtos/produto_14_3x.png'}]
    },
    {
        id: 15,
        produto: 'FakeDB - Boneco Sonic',
        preco: 6000,
        categoria: 'diversos',
        descricao: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
        imagens: [{url: '/produtos/produto_15_1x.png'}, {url: '/produtos/produto_15_3x.png'}]
    },
    {
        id: 16,
        produto: 'FakeDB - Rádio Retrô',
        preco: 6000,
        categoria: 'diversos',
        descricao: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
        imagens: [{url: '/produtos/produto_16_1x.png'}, {url: '/produtos/produto_16_3x.png'}]
    },
    {
        id: 17,
        produto: 'FakeDB - Óculos VR',
        preco: 6000,
        categoria: 'diversos',
        descricao: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
        imagens: [{url: '/produtos/produto_17_1x.png'}, {url: '/produtos/produto_17_3x.png'}]
    },
    {
        id: 18,
        produto: 'FakeDB - Fantasia Pikachu',
        preco: 6000,
        categoria: 'diversos',
        descricao: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
        imagens: [{url: '/produtos/produto_18_1x.png'}, {url: '/produtos/produto_18_3x.png'}]
    },
]

export default produtos;