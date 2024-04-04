const initialState = {
    isModalOpen: false
};

const ModalReducer =(state = initialState , action ) => {
    switch (action.type){
        case "SET_MODAL":
            return{...state, isModalOpen: action.payload};
        default :
            return state;
    }

}

export default ModalReducer;