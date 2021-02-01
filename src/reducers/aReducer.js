const initialState = {
    value:"Metin Bekleniyor",
    cls:null,
}
const aReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_VALUE":
            state ={
                value : action.value,
                cls : false,
            }
            return state
        case "DELETE_VALUE":
            state ={
                value : action.value,
                cls : true
            }
            return state
        default:
            return state
    }
}

export default aReducer