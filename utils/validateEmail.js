export function validateEmail(value) {

    const [nome, dominio] = value.split('@');

    if (dominio == undefined) {

        return false

    } else {
        const [site, pais] = dominio.split('.');

        if (value.indexOf("@") < 0 ||
            value.indexOf(" ") > 0 ||
            value.indexOf(".") < 0 ||
            nome.length < 3 ||
            site.length < 3 ||
            pais.length < 2) {

            return false;

        }
    }

    return true;

};