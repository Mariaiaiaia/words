import Page from '../styles/page.module.scss';
import pageImg from '../styles/pageImages.module.scss';
import startPageImg from '../images/startPage.svg';
import Border from '../styles/borders.module.scss';
import startPage from '../styles/start.module.scss';


function StartPage(){
    return(
        <div className={Page.page}> 
            <div className={Page.title}> Welcome to My Cards! </div>
            <div className={Border.border_start_page}>          
                <div className={startPage.welcome_text}>
                    My Cards is a simple education application which can be used to learn new words
                    on a different languages.
                    <br/>You can create your own collection of words, learn them by clicking on the cards to see the translation,
                    and test your knowledge on the exam!
                </div> 
            </div>
            <div className={pageImg.img_start}>
                <img src={startPageImg} alt="add page" />
            </div>

        </div>
    )
};

export default StartPage;