export function validateTextoFormContato(value) {

    if (value.length < 2 || value.length > 40) {

        return false;
        
    }

    return true;
};