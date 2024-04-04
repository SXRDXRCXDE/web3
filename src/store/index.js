import { configureStore } from '@reduxjs/toolkit';
import ModalReducer from "./reducers/isModalReducer";
import CurrentImageIndexReducer from "./reducers/currentImageIndexReducer";




const store = configureStore({
    reducer: {
        isModalOpen: ModalReducer,
        currentImageIndex : CurrentImageIndexReducer
    }
})

export default store;
