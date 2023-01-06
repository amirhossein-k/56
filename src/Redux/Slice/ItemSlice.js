import { createSlice } from "@reduxjs/toolkit";

      
const initialState = {
      listItems:[
            {id:1, Nameitem:'amir'},
            {id:2, Nameitem:'zahra'}
      ]
}
function add ()
{

}
const ItemSlice = createSlice({
      name:"item",
      initialState,
      reducers:{
            add
      }
})

export default ItemSlice.reducer
export const { add:addAction} = ItemSlice.actions