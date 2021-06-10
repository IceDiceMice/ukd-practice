export const AddItem = 'addItem'
const initialState = {
    text: null

}

export const loginReducer =(state = initialState, action)=>{

   if(action.type===AddItem) {return{...state, text : action.payload}}

  
}
