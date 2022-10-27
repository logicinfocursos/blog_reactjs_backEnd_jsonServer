export const putOneZeroOnTheLeftSide = (string) => {

    return ("00" + string).substr(-2, 2)
}


export const capitalizeFirstLetter = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}



export function titleCapitalize(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(' ');
}

/*********************************************************************** 
 **  capitalize: transforma a primeira letra em maiscula de cada palavra do texto
 ***********************************************************************/
export const capitalize = (str) => {

    if (!str) return ''
    if (str === '') return ''

    let splitStr = str.toLowerCase().split(' ')

    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1)
    }
    // Directly return the joined string
    return splitStr.join(' ')

} /*** theEnd: capitalize ***/





export const capitalize2 = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}





export function codeGenerator(prefixType, length = 7) {
    /*
        const prefix = prefixType === "subcategory" ? "sbc_" :
            prefixType === "category" ? "ctg_" :
            prefixType === "group" ? "grp_" :
            prefixType === "designer" ? "dsg_" :
            prefixType === "product" ? "prd_" : ""
        prefixType === "productSheet" ? "pds_" : ""


        let result = ''
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length))
        }

        return prefix + result;*/
}


export function getFileExtension(filename) {

    return filename.substring(filename.indexOf(".")).toLowerCase().trim()
}