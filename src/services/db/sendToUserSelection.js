import { apiGET, apiPOST, apiPUT } from '../api'


export const sendToUserSelection = async (item, type) =>{

    const findResult = await apiGET('clientSelection', item.code, "code")

    let newItem = {
        ...item,
        clientCode: "cli1",
        type: type, 
        qtd: 1
    }

    if(findResult.data[0]){
        
        newItem = {...newItem, qtd: findResult.data[0].qtd+1, id:findResult.data[0].id}

        const result = await apiPUT('clientSelection', newItem)

    }else{

        const result = await apiPOST('clientSelection', newItem)
    }
}