export const addtoBasket=(item) => {
    return {
        type: "ADD_TO_BASKET",
        payload: item
    }
}

export const removefromBasket=(id) => {
    return {
        type: "REMOVE_FROM_BASKET",
        payload: id
    }
 }

