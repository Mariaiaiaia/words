import Addcards from '../components/Addcards';
import Collection from '../components/Collection';
import Page from '../styles/page.module.scss';
import Border from '../styles/borders.module.scss';
import addPageImg from '../images/addPage.svg';
import pageImg from '../styles/pageImages.module.scss';
import { motion } from 'framer-motion';



function ToAddPage(){
    return(

        <div className={Page.page}>
            <motion.div 
            animate={{ y: 10 }} 
            transition={{ type: "spring", stiffness: 700}}
            className={Page.title}
            >
                Add a new word
            </motion.div>
           
            <div className={Border.border_add_card_page}>
                <Addcards /> 
            </div>    
            <Collection />
            <div className={pageImg.img_container}>
                <img src={addPageImg} alt="add page" />
            </div>
        </div>
    )
}

export default ToAddPage;