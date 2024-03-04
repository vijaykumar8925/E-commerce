import { ADD_TO_CART,ADD_TO_LIKED,ADD_TO_MIXINS } from "./cartType";


const intitalState = {
    cartCount : 0,
    likesCount : 0,
    mixinsCount : 0
}

 const CartReducer = (state = intitalState ,action) => {
   switch(action.types){
    case ADD_TO_CART : return{
        ...state,
        cartCount : state.cartCount + 1
    }
    case ADD_TO_MIXINS : return{
        ...state,
        likesCount : state.likesCount + 1
    }
    case ADD_TO_LIKED : return{
        ...state,
        mixinsCount : state.mixinsCount + 1
    }
    default : return state
   }
}

export default CartReducer;

