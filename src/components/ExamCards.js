import { useState, useEffect } from 'react';
import CheckTheAnswer from '../components/CheckTheAnswer';
import { useDispatch, useSelector } from 'react-redux';
import {addCorrectAns} from '../store/ExamSlice';
import PropTypes from 'prop-types';
import Card from '../styles/card.module.scss';
import examCards from '../styles/examCards.module.scss';
import Border from '../styles/borders.module.scss';
import Background from '../styles/backgrounds.module.scss';


function ExamCards(props){
    const [index, setIndex] = useState(0);
    const [answer, setAnswer] = useState("");
    const [showCheck, setShowCheck] = useState("");
    const [showNextBtn, setShowNextBtn] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [random, setRandom] = useState(false);

    const cards = useSelector(state => state.quizCards.quizCards);
    const dispatch = useDispatch();

    useEffect(() => {
        if(Math.floor(Math.random() * 100) % 2 === 0){
        setRandom(true)}else{
            setRandom(false)
        };    
    }, [index]);

    function Check() {
        const correctAnswer = random ? cards[index].value.translate : cards[index].value.word;
        correctAnswer.toLowerCase();
        const answerToCheck = answer.toLowerCase();

        if(correctAnswer === answerToCheck){
            setIsCorrect(true);
            dispatch(addCorrectAns());
        }
    };

    function handleNextWord(){
        setAnswer("");
        setShowCheck(false);
        setShowNextBtn(false);
        setIsCorrect(false);
        setIndex(index + 1);     
    };

    function handleSetWord(){
        Check();
        setShowCheck(true);
        setShowNextBtn(true);
     
        if(cards.length - 1 === index){
            setShowNextBtn(false);
            setTimeout(() => props.setEnd(true), 1500);
        }
    };


    return(
 
        <div className={Border.border_exam_card}>
            <div className={`${Background.back_card_exam} ${Card.back_card}`}>
            <div className={Border.card_border_exam_card}>
                <div className={`${Card.card}`}>
                  <div className={`${examCards.container} ${Border.card_exam_in}`}>  
                    
                    <div className={examCards.side_right}>
                        
                        <div className={examCards.question}>
                            {random ? cards[index].value.word : cards[index].value.translate}   
                        </div>
                        {showCheck 
                        ? null 
                        : <input
                        className={examCards.answer}
                        type="text"
                        placeholder="enter a answer"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        /> 
                        }
                        
                        <div className={examCards.btn_container}>
                            {showCheck ? <button className={examCards.exam_btn_light}>set</button> : <button className={examCards.exam_btn} onClick={handleSetWord}>set</button>}
                            {showNextBtn ? <button className={examCards.exam_btn} onClick={handleNextWord}>next</button> : <button className={examCards.exam_btn_light}>next</button>}
                        </div>
                    </div>
                    <div className={examCards.side_left}>
                        <div className={examCards.counter}>{index+1} / {cards.length}</div>
                        {showCheck ? <CheckTheAnswer isCorrect={isCorrect}/> : null}
                    </div>
    
                  </div>
                </div>
                </div>
            </div>
        </div>
    )
};

ExamCards.propTypes = {
    setEnd: PropTypes.func.isRequired
};


export default ExamCards;