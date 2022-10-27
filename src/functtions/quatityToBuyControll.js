export const quantityToBuyControll = (action, curentQuantityToBuy) => {

    if (action == 'less') curentQuantityToBuy--
        if (action == 'add') curentQuantityToBuy++
            if (curentQuantityToBuy < process.env.REACT_APP_QUANTITY_TO_BUY_MINIMUM) curentQuantityToBuy = process.env.REACT_APP_QUANTITY_TO_BUY_MINIMUM
    if (curentQuantityToBuy > process.env.REACT_APP_QUANTITY_TO_BUY_MINIMUM) curentQuantityToBuy = process.env.REACT_APP_QUANTITY_TO_BUY_MINIMUM

    return curentQuantityToBuy
}