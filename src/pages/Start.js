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
                    MyCards is a simple educative application which the intern of teaching new words
                    in different languages. You can create your own vocabulary using digital flash cards. 
                    <br /><div className={startPage.ul_title}>how mycards is used:</div>
                    <ul>
                        <li>enter the word and its translation</li>
                        <li>Once the word appears, click on it to see its translation</li>
                    </ul>  
                    It is a gread way to test your knowledge on the exam!
                </div> 
            </div>
            <div className={pageImg.img_start}>
                <img src={startPageImg} alt="add page" />
            </div>

        </div>
    )
};

export default StartPage;