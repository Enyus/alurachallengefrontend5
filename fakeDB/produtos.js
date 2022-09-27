const produtos = [
    {
        id: 1,
        produto: 'Caneca Stormtrooper',
        preco: 6000,
        categoria: 'starwars',
        descricao: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
        imagens: ['/produto_1_1x.png', '/produto_1_3x.png']
    },
    {
        id: 2,
        produto: 'Busto Star Wars',
        preco: 6000,
        categoria: 'starwars',
        descricao: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
        imagens: ['/produto_2_1x.png', '/produto_2_3x.png']
    },
    {
        id: 3,
        produto: 'Boneco Yoda',
        preco: 6000,
        categoria: 'starwars',
        descricao: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
        imagens: ['/produto_3_1x.png', '/produto_3_3x.png']
    },
    {
        id: 4,
        produto: 'Boneco Storm Trooper',
        preco: 6000,
        categoria: 'starwars',
        descricao: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
        imagens: ['/produto_4_1x.png', '/produto_4_3x.png']
    },
    {
        id: 5,
        produto: 'Boneco Baby Yoda',
        preco: 6000,
        categoria: 'starwars',
        descricao: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
        imagens: ['/produto_5_1x.png', '/produto_5_3x.png']
    },
    {
        id: 6,
        produto: 'Boneco Kylo Ren',
        preco: 6000,
        categoria: 'starwars',
        descricao: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
        imagens: ['/produto_6_1x.png', '/produto_6_3x.png']
    },
    {
        id: 7,
        produto: 'Controle X-Box',
        preco: 6000,
        categoria: 'consoles',
        descricao: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
        imagens: ['/produto_7_1x.png', '/produto_7_3x.png']
    },
    {
        id: 8,
        produto: 'Play Station 5',
        preco: 6000,
        categoria: 'consoles',
        descricao: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
        imagens: ['/produto_8_1x.png', '/produto_8_3x.png']
    },
    {
        id: 9,
        produto: 'Nintendo NES',
        preco: 6000,
        categoria: 'consoles',
        descricao: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
        imagens: ['/produto_9_1x.png', '/produto_9_3x.png']
    },
    {
        id: 10,
        produto: 'Controle Switch',
        preco: 6000,
        categoria: 'consoles',
        descricao: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
        imagens: ['/produto_10_1x.png', '/produto_10_3x.png']
    },
    {
        id: 11,
        produto: 'X-box Series S',
        preco: 6000,
        categoria: 'consoles',
        descricao: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
        imagens: ['/produto_11_1x.png', '/produto_11_3x.png']
    },
    {
        id: 12,
        produto: 'Gameboy',
        preco: 6000,
        categoria: 'consoles',
        descricao: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
        imagens: ['/produto_12_1x.png', '/produto_12_3x.png']
    },
    {
        id: 13,
        produto: 'Camiseta Logo Atari',
        preco: 6000,
        categoria: 'diversos',
        descricao: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
        imagens: ['/produto_13_1x.png', '/produto_13_3x.png']
    },
    {
        id: 14,
        produto: 'Camiseta Controle Atari',
        preco: 6000,
        categoria: 'diversos',
        descricao: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
        imagens: ['/produto_14_1x.png', '/produto_14_3x.png']
    },
    {
        id: 15,
        produto: 'Boneco Sonic',
        preco: 6000,
        categoria: 'diversos',
        descricao: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
        imagens: ['/produto_15_1x.png', '/produto_15_3x.png']
    },
    {
        id: 16,
        produto: 'Rádio Retrô',
        preco: 6000,
        categoria: 'diversos',
        descricao: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
        imagens: ['/produto_16_1x.png', '/produto_16_3x.png']
    },
    {
        id: 17,
        produto: 'Óculos VR',
        preco: 6000,
        categoria: 'diversos',
        descricao: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
        imagens: ['/produto_17_1x.png', '/produto_17_3x.png']
    },
    {
        id: 18,
        produto: 'Fantasia Pikachu',
        preco: 6000,
        categoria: 'diversos',
        descricao: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
        imagens: ['/produto_18_1x.png', '/produto_18_3x.png']
    },
]

export default produtos;