import { legacy_createStore } from "redux";
import CartReducer from "./cart/cartReducer";

const Store = legacy_createStore(CartReducer);

export default Store;