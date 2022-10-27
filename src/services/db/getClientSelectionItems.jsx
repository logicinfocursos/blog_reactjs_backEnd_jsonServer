import { apiGET } from '../api'



export const getClientSelectionItems = async (type) =>{

    const findResult = await apiGET('clientSelection')

    let numItems = 0

    if (findResult && findResult.data && findResult.data.length > 0){

        const findResult2 = findResult.data.filter((i)=>i.type==type)

        numItems = findResult2 ? findResult2.length : 0
    }
        
    return numItems
}