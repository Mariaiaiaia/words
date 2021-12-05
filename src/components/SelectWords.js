import { useSelector, useDispatch } from 'react-redux';
import { addQuizCard, deleteQuizCard } from '../store/QuizCardsSlice';
import { selectCard } from '../store/CardsSlice';
import Select from '../styles/select.module.scss';
import  CardsStyle  from '../styles/collection.module.scss';
import { useEffect } from 'react';
import { updateSelectedState } from '../store/CardsSlice';



function SelectWords() {
    const cardsCollection = useSelector(state => state.cards.cards);
    const dispatch = useDispatch();

    useEffect(() => { return () => { dispatch(updateSelectedState()); } }, [dispatch])

    function addToSelected(word, translate, id){  
        dispatch(addQuizCard({word, translate, id}));
    };

    function removeFromSelected(id) {  
        dispatch(deleteQuizCard({id}));
    };

    function handleCheckbox(card){
        const id = card.id;

        if(card.value.selected === false){
            dispatch(selectCard({id}));       
            addToSelected(card.value.word, card.value.translate, card.id)
         
        }else{
            dispatch(selectCard({id}));
            removeFromSelected(id) 
        }
    };


    return(   
        <div className={CardsStyle.cards_container}>
        {cardsCollection.map(card => {
            return(
               <div key={card.id} className={Select.card}>
                   <div className={Select.check_container}>
                        <input className={Select.input_box} type="checkbox" id={card.id} onChange={() => {handleCheckbox(card)}} value={card.value.word}/>
                        <span className={Select.checkmark}></span>
                    </div>
                    <label>{card.value.word}</label>  
               </div>
            )
        })}
        </div>   
    )  
};

export default SelectWords;