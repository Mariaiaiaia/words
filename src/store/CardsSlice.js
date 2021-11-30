import { createSlice } from "@reduxjs/toolkit";

const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: [],
        currId: 0
    },
    reducers: {
        addCard(state, action) {

            state.currId += 1;

            state.cards.push({
                id: state.currId,
                value: {
                    word: action.payload.word,
                    translate: action.payload.translate,
                    selected: false,
                }
            })
        },
        deleteCard(state, action) {
            state.cards = state.cards.filter(card => card.id !== action.payload.id)
        },
        selectCard(state, action) {
            const card = state.cards.find(card => card.id === action.payload.id);
            card.value.selected = !card.value.selected;
        },
        updateSelectedState(state) {
            state.cards.map(card => {
                return(
                    card.value.selected = false
                )
            })
        }
    },

});


export const {addCard, deleteCard, selectCard, updateSelectedState} = cardsSlice.actions;
export default cardsSlice.reducer;