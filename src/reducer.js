export const AddItem = 'addItem'
const initialState = {
    text: null

}
/*const action ={
    type: addItem,
    payload:"data"
}*/
export const loginReducer =(state = initialState, action)=>{

   if(action.type===AddItem) {return{...state, text : action.payload}}

  
}