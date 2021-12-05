import Side from './Side';
import { useSelector } from 'react-redux';
import  CardsStyle  from '../styles/collection.module.scss';
import { motion } from 'framer-motion';


function Collection() {
 
    const cardsCollection = useSelector(state => state.cards.cards);

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.5,
            staggerChildren: 0.1
          }
        }
    }
        
    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
    }


    if(cardsCollection.length !== 0){
        return(
        <motion.div variants={container} initial="hidden" animate="visible" className={CardsStyle.cards_container}>
                {cardsCollection.map(card => {  
                    return(
                        <motion.div variants={item}  key={card.id} className={CardsStyle.card}> 
                            <Side card={card.value} id={card.id}/>
                        </motion.div>
                    )
                })}       
            </motion.div>
        )
    }else {
        return(
            <div className={CardsStyle.no_cards_msg}>
                there are no cards in your dictionary yet       
            </div>
        )
    }
};

export default Collection;