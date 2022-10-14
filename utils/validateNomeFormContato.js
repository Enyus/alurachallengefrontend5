export function validateNomeFormContato(value) {

    if (value.length < 2 || value.length > 120) {

        return false;
        
    }

    return true;
};