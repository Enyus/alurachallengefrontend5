export function validateProduto(value) {

    if (value.length < 2 || value.length > 20) {

        return false;
        
    }

    return true;
};