import { createSlice } from "@reduxjs/toolkit";

const quizCardsSlice = createSlice({
    name: 'quizCards',
    initialState: {
        quizCards: []
    },
    reducers: {
        addQuizCard(state, action) {

            state.quizCards.push({
                id: action.payload.id,
                value: {
                    word: action.payload.word,
                    translate: action.payload.translate,
                }
            })
        },
        deleteQuizCard(state, action) {
            state.quizCards = state.quizCards.filter(card => card.id !== action.payload.id)
        },
        clearQuizCard(state) {
            state.quizCards = [];
        },
        addArrayToCards(state, action) {
            action.payload.cardsCollection.map(card => {
                return(
                    state.quizCards.push({
                        id: card.id,
                        value: {
                            word: card.value.word,
                            translate: card.value.translate
                        }
                    })
                )
            })
        }
    },
});


export const {addQuizCard, deleteQuizCard, clearQuizCard, addArrayToCards} = quizCardsSlice.actions;
export default quizCardsSlice.reducer;