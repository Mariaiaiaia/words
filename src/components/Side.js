import { useState } from 'react';
import PropTypes from 'prop-types';
import  CardsStyle  from '../styles/collection.module.scss';
import { motion, useAnimation } from 'framer-motion';
import { BiX } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { deleteCard } from '../store/CardsSlice';

function Side({card, id}) {
    const[curSide, setCurSide] = useState(card.word);
    const[curCardStyle, setcurCardStyle] = useState(`${CardsStyle.card_side_word}`);
    const control = useAnimation();
    const dispatch = useDispatch();


    function cardAnimation(){
        control.start({ rotate: [5,-8,5,0], transition:{duration:0.2} });
    };

    //<div className={CardsStyle.delete_btn} onClick={() => handleDeleteWord(card.id)}><BiX /></div>

    function handleDeleteWord(id){
        dispatch(deleteCard({id}));
       
    };

    function turnCard(){
        if(curSide === card.word){
            setCurSide(card.translate);
            setcurCardStyle(`${CardsStyle.card_side_translate}`);
            cardAnimation();
            
        }else{
            setCurSide(card.word);
            setcurCardStyle(`${CardsStyle.card_side_word}`);
            cardAnimation();      
        }
    };

    
    return (
        <motion.div
            animate={control}
            className={`${CardsStyle.card_side} ${curCardStyle}`}
            onClick={turnCard}                       
        >
        {curSide}   
        <div className={CardsStyle.delete_btn} onClick={() => handleDeleteWord(id)}><BiX /></div>     
        </motion.div>
    )
}

Side.propTypes = {
    card: PropTypes.shape({
        word: PropTypes.string.isRequired,
        translate: PropTypes.string.isRequired
    })
};

export default Side;