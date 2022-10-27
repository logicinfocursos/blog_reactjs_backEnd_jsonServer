import { api } from './api'



export const apiPUT = async(table = '', objToUpdate) => {

    if (table !== '') {

        try {

            await api.put(`${table}/${objToUpdate.id}`, objToUpdate)  

            return true

        } catch (error) {

            console.log(`error when trying to read the apitPUT - table: ${table}`, error)
             
        }
    }   

    return false
}