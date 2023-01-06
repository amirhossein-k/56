import { configureStore } from "@reduxjs/toolkit";
import ItemReducer from "./Slice/ItemSlice";
const Store = configureStore({
      reducer:{
            itemss:ItemReducer
      }
})

export default Store