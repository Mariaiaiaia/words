import { useState, useEffect } from 'react';
import SelectWords from '../components/SelectWords';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { clearQuizCard, addArrayToCards } from '../store/QuizCardsSlice';
import { updateSelectedState } from '../store/CardsSlice';
import Page from '../styles/page.module.scss';
import toExam from '../styles/toexam.module.scss';
import Card from '../styles/card.module.scss';
import Border from '../styles/borders.module.scss';
import Background from '../styles/backgrounds.module.scss';
import examPageImg from '../images/examPage.svg';
import pageImg from '../styles/pageImages.module.scss';
import { motion } from 'framer-motion';

function ToExamPage(){
    const [showWords, setShowWords] = useState(false);
    const quizCards = useSelector(state => state.quizCards.quizCards);
    const cardsCollection = useSelector(state => state.cards.cards);
    const dispatch = useDispatch();

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
        }
    }


    useEffect(() => {
       
        dispatch(clearQuizCard());
        dispatch(updateSelectedState());

    }, [dispatch])

    
    function addAllWords() {
        setShowWords(false);
        dispatch(clearQuizCard());
        dispatch(addArrayToCards({cardsCollection}));
    };

    function toShowWords() {
        if(!showWords){
            setShowWords(true);
            dispatch(clearQuizCard());       
        }else{
            setShowWords(false)
        }
    };

    if(cardsCollection.length === 0){
        return(
            <motion.div 
                    animate={{ y: 10 }} 
                    transition={{ type: "spring", stiffness: 700}}
                    className={Page.title}
                >
                no words yet
            </motion.div>
        )
    }else{
        return( 
            <div className={Page.page}> 
                <motion.div 
                    animate={{ y: 10 }} 
                    transition={{ type: "spring", stiffness: 700}}
                    className={Page.title}
                >
                test your knowledge
                </motion.div>
                <div className={Border.border_exam_page}>
                    <div className={`${Background.back_card_exam_page} ${Card.back_card}`}>
                      

                        <motion.div animate={{ opacity: 1, rotate: 10, transition:{ duration: 0.7}}} initial={{ opacity: 0}} className={Border.card_border_exam_page}>
                            <motion.div variants={container} animate={"visible"} initial={"hidden"} className={`${Card.card} ${Border.exam_in}`}>
                                <motion.div variants={item} className={toExam.words_count}>test words: {quizCards.length}</motion.div>
                                <motion.div variants={item} className={toExam.button_container}>
                                    <button className={toExam.exam_btn} onClick={addAllWords}>Learn all words</button>
                                    <button className={toExam.exam_btn} onClick={toShowWords}>Select words</button>
                                    {quizCards.length !==0 ? <button className={toExam.exam_btn}><Link className={toExam.link_btn} to={{pathname:'/the-exam'}}>start test</Link></button> : null}
                                </motion.div>
                            </motion.div> 
                        </motion.div>
                    </div>
                </div>
                {showWords ? <SelectWords /> : null}
                <div className={pageImg.img_container}>
                    <img src={examPageImg} alt="add page" />
                </div>
                
            </div>
        )
    }
}

export default ToExamPage;