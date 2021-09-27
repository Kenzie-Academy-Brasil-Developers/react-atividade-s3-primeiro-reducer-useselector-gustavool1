const initialState = ['Banana', 'Maçã', 'Morango']
const reducerFruits = (state = initialState, action) =>{
    console.log(action)
    switch( action.type ){
        case "ADD_FRUIT":
            const { fruit } = action
            return [...state, fruit] 
        default:
            return state
    }
}
export default reducerFruits