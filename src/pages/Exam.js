import { useState } from 'react';
import ExamCards from '../components/ExamCards';
import End from '../components/End';
import Page from '../styles/page.module.scss';



function Exam(){
    const [end, setEnd] = useState(false);

    return(
        <div className={Page.page}>  
            {!end ? <ExamCards setEnd={setEnd}/> : null}
            {end ? <End /> : null}
        </div>
    )
};

export default Exam;