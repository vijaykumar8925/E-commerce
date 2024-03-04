import { ADD_TO_CART ,ADD_TO_LIKED,ADD_TO_MIXINS } from "./cartType";

export const AddCART = () => {
    return{
        type : ADD_TO_CART
    }
}

export const AddMixins = () => {
    return{
        type :ADD_TO_MIXINS
    }
}

export const AddLikes = () => {
    return{
      type : ADD_TO_LIKED
    }
}