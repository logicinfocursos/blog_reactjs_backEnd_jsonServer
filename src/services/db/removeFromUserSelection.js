import { apiDELETE } from '../api'



export const removeFromUserSelection = async (table, item) =>{

    const findResult = await apiDELETE(table, item.id)
    
}