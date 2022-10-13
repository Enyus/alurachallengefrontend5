export function validatePassword(value) {

    if (value.length != 6) {

        return false;
        
    }

    return true;
};