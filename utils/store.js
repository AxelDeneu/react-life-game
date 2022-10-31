import { configureStore } from '@reduxjs/toolkit'
import lifeGameReducer from '../features/lifeGameSlice'

export default configureStore({
    reducer: {
        lifeGame: lifeGameReducer
    }
})