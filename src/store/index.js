import { configureStore } from "@reduxjs/toolkit";
import cardsReduser from './CardsSlice';
import quizCardsReduser from './QuizCardsSlice';
import examReduser from './ExamSlice';
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from "redux"


const redusers = combineReducers({
    cards: cardsReduser,
    quizCards: quizCardsReduser,
    exam: examReduser
})


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cards', 'quizCards']
}

const persistedReducer = persistReducer(persistConfig, redusers)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    
  
});



export default store; 

