const INIT_STATE = {
    carts:[]
}

 const cartReducer = (state = INIT_STATE,action) =>{
    switch(action.type){
        case 'ADD_TO_CART':
            return{
                ...state, // returning the previous state
                cart:[...state.carts,action.payload] //returning the  new state
            }
        default:
            return state // or INIT_STATE ....which is equal to previous state
    }
}

export default cartReducer