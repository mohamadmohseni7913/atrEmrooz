import { createSlice } from "@reduxjs/toolkit";

let lastId=0;
// reducer
const slice= createSlice({
    name:"shoppingBasket",
    initialState:{
        list:[],
        lastFetch:null,
        loading:false
    },
    reducers:{
        producteAdded:(state,action)=>{
            // state.list.push({
            // id:++lastId,
            // name:action.payload.name,
            // code:action.payload.code,
            // mil:action.payload.mil
            // })
        //  state.list.push(action.payload.id)
         const stateList=action.payload
         const newww=stateList.store.list.filter(item=>{return (item.id==action.payload.id)})
            console.log("action",newww);
            const n =[...state.list,newww]
            state.list=n
           

       
        },
        productRemoved:(state,action)=>{
          state.list=  state.list.filter(product=>product.id!==action.payload.id)
        },
        productRequsted:(state,action)=>{
            state.loading=true
        },
        productRequstFaild:(state,action)=>{
            state.loading=false
        }

    }
})
export const {producteAdded,productRemoved} =slice.actions;


export default slice.reducer;