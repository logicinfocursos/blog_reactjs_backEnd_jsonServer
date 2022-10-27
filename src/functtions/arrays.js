/*
    reverseArray(array)
    inverte a ordem dos elementos da array, o último troca de posição com o primeiro e assim sucessivamente  
    array - array a sofrer a inversão    
*/
export function reverseArray(array) {

    let newArray = []

    for (let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i])
    }

    return newArray
}