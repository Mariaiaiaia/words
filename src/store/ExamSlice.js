import { createSlice } from "@reduxjs/toolkit";


const examSlice = createSlice({
    name: 'exam',
    initialState: {
        correct: 0
    },
    reducers: {
        addCorrectAns(state){
            state.correct += 1;
        },
        clearCorrectAns(state){
            state.correct = 0;
        }
    }
});

export const {addCorrectAns, clearCorrectAns} = examSlice.actions;
export default examSlice.reducer;