const initialstate={
    basket: [],
    user: null,
    successHidden: true,
    search:"",
    search_click: false
}

const reducer=(state=initialstate,action) => {
    switch(action.type) {
        case "ADD_TO_BASKET": return {
            ...state,
            basket: [...state.basket, action.payload]
        }
        case "CLEAR" : return {
            ...state,
            basket: []
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
    case "SET_USER": return {
        ...state,
         user: action.payload
    }
    case "SUCCESS" : return {
        ...state,
        successHidden: action.payload
    }
    case "SET_SEARCH": return {
        ...state,
        search: action.payload
    }
    case "SET_CLICK": return {
        ...state,
        search_click: action.payload
    }
    default: return state
    }
}
export default reducer;