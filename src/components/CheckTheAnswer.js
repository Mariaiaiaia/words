import  PropTypes  from "prop-types";
import examCards from '../styles/examCards.module.scss';
import ThumbDown from '../images/thumbsDown.svg';
import ThumbUp from '../images/thumbsUp.svg';
import { motion } from 'framer-motion';


function CheckTheAnswer(props) {
    
    if(props.isCorrect === true){
        return(     
            <div className={examCards.check_container_true}>
                <div className={examCards.circle_true}></div>
                <div className={examCards.answer_true}>correct answer</div>
                <img src={ThumbUp} alt="the answer is correct"/>
            </div>
        )
    }else{
        return(
            <motion.div animate={{ scale: 1, transition:{ type: "spring", stiffness: 900}}} initial={{scale: 0.8}} className={examCards.check_container_false}>
                <div className={examCards.circle_false}></div>
                <div className={examCards.answer_false}>wrong answer</div>
                <img src={ThumbDown} alt="the answer isn't correct"/>
               
            </motion.div>
        )
    } 
}

CheckTheAnswer.propTypes = {
    isCorrect: PropTypes.bool.isRequired
};

export default CheckTheAnswer;