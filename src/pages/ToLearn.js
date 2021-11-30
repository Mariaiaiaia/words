import Collection from "../components/Collection";
import Page from '../styles/page.module.scss';
import { motion } from 'framer-motion';
import learnPageImg from '../images/learnPage.svg';
import pageImg from '../styles/pageImages.module.scss';

function ToLearnPage(){
  
    return(
        <div className={Page.page}> 
    
            <motion.div 
            animate={{ y: 10 }} 
            transition={{ type: "spring", stiffness: 700}}
            className={Page.title}
            >
                words to learn
            </motion.div>
            <Collection />
            <div className={pageImg.img_container}>
                <img src={learnPageImg} alt="add page" />
            </div>
       
        </div>
    )
};

export default ToLearnPage;

