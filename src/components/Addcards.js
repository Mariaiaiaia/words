import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCard } from '../store/CardsSlice';
import Card from '../styles/card.module.scss';
import addPage from '../styles/toadd.module.scss';
import { motion } from 'framer-motion';
import Border from '../styles/borders.module.scss';
import Background from '../styles/backgrounds.module.scss';


function Addcards() {
    const [word, setWord] = useState("");
    const [translate, setTranslate] = useState("");
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    
    function addNewCard() {
        if(word === "" || translate === ""){
            return(
                setError("you need to enter a word in the target language and translation in the native language")
            )
        }else{
            dispatch(addCard({word, translate}));
            setWord("");
            setTranslate("");
            setError("");
        }
    };

    const container = {
        hidden: { opacity: 0, scale: 1 },
        visible: {
          opacity: 1,
          scale: 1,
          rotate: -10,
          transition: {
            delayChildren: 1,
            staggerChildren: 0.1
          }
        }
    }
  
    const item = {
        hidden: { y: 10, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            delayChildren: 0.5,
            staggerChildren: 0.3
          }
        }
    }


    return(
        <div className={`${Card.back_card} ${Background.back_card_add_page}`}>
            <motion.div animate={{ opacity: 1, rotate: 10, transition:{ duration: 0.7}}} initial={{ opacity: 0}} className={` ${Border.card_border_add_card}`}>
            <motion.div variants={container} animate={"visible"} initial={"hidden"} className={`${Card.card} ${Border.card}`}>
                <div className={addPage.inputs_new_card}>
                    <motion.input
                        variants={item}
                        type="text"
                        className={addPage.input_new_card}
                        placeholder="learning language"
                        value={word}
                        onChange={(e) => setWord(e.target.value.toLowerCase())}
                    />
                    <motion.input
                        variants={item}
                        type="text"
                        className={addPage.input_new_card}
                        placeholder="native language"
                        value={translate}
                        onChange={(e) => setTranslate(e.target.value.toLowerCase())}
                    />
                </div>
                <motion.button variants={item} className={addPage.add_button} onClick={addNewCard}>
                    Add
                </motion.button>
                {error.length === 0 ? <div className={addPage.empty_area}>no message</div> : <div className={addPage.message_area}>{error}</div>} 
            </motion.div>
            </motion.div>
        </div>
    )

};

export default Addcards;