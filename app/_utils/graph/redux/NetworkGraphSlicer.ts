import { createSlice } from '@reduxjs/toolkit'
export const GraphSlice = createSlice({
    name: 'graph',
    initialState: {
        floor: 2,
        controlPanal: 'default',
        type: '',
        id: '',
    },
    reducers: {
        counterPanel: (state, action) => {
            state.controlPanal = action.payload
        },
        setFloor: (state, action) => {
            state.floor = action.payload
        },
        nodeType: (state, action) => {
            state.type = action.payload
        },
        nodeId: (state, action) => {
            state.id = action.payload
        },
    },
})
export const { counterPanel, nodeType, nodeId, setFloor } = GraphSlice.actions

export default GraphSlice.reducer
