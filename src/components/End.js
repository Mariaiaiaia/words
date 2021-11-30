import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { clearCorrectAns } from '../store/ExamSlice';
import { clearQuizCard } from '../store/QuizCardsSlice';
import Card from '../styles/card.module.scss';
import end from '../styles/end.module.scss';
import Border from '../styles/borders.module.scss';
import { motion } from 'framer-motion';



function End(){
    const dispatch = useDispatch();
    const correct = useSelector(state => state.exam.correct);
    const quizCards = useSelector(state => state.quizCards.quizCards);
    const styleTop = 135 -(correct / quizCards.length * 130);

    function clear(){
        dispatch(clearCorrectAns());
        dispatch(clearQuizCard());
    };

    const btn = {
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
        <div className={Border.border_end_page}>
            <div className={Card.back_card}>
                <div className={Border.card_border_end}>
                    <div className={`${Card.card} ${Border.end_in}`}>
                        <div className={end.container}>
                            <motion.div 
                            animate={{ y: 10 }} 
                            transition={{ type: "spring", stiffness: 700}}
                            className={end.finish_msg}
                            >
                                total correct answers: {correct}
                            </motion.div>
                            <div className={end.result_circle}>
                                <div className={end.result_wave} style={{top: `${styleTop}px`}}></div>
                                <div className={end.result_percent}>{Math.round(correct / quizCards.length * 100)}%</div>
                            </div>
                            <div className={end.container_btns}>
                                <motion.button variants={btn} animate={"visible"} initial={"hidden"} className={end.finish_btn} onClick={clear}><Link className={end.link_btn} to={{pathname:'/exam'}}>start new test</Link></motion.button>
                                <motion.button variants={btn} animate={"visible"} initial={"hidden"} className={end.finish_btn} onClick={clear}><Link className={end.link_btn} to={{pathname:'/learn'}}>learn words</Link></motion.button>
                            </div> 
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
};

export default End;