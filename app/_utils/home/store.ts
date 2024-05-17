import { configureStore } from '@reduxjs/toolkit'
import NetworkGraphSlicer from '@/app/_utils/graph/redux/NetworkGraphSlicer'

const store = configureStore({
    reducer: {
        graph: NetworkGraphSlicer,
    },
})
export default store
export type HomeStoreState = ReturnType<typeof store.getState>
export type HomeStoreDispatch = typeof store.dispatch
