export function validateDescricao(value) {

    if (value.length < 2 || value.length > 150) {

        return false;
        
    }

    return true;
};