const initialstate={
    basket: [],
    user: null
}

const reducer=(state=initialstate,action) => {
    switch(action.type) {
        case "ADD_TO_BASKET": return {
            ...state,
            basket: [...state.basket, action.payload]
        }
        case "REMOVE_FROM_BASKET": {
        let index=state.basket.findIndex(item => item.id===action.payload)
        let newBasket=[...state.basket];
        if(index>=0)
        {
            newBasket.splice(index,1)
          
        }
        else {
            console.warn("Unable to delete may be item is not present")
        }
        return {
            ...state,
            basket: newBasket
        }
    }
    default: return state
    }
}
export default reducer;