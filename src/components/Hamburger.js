import navStyle from '../styles/nav.module.scss';
import { RiMenu5Line } from 'react-icons/ri';
import { useState } from 'react';
import Navigation from "../components/Navigation";

function Hamburger() {
    const [open, setOpen] = useState(false);

    return(
        <div className={navStyle.ham_container}>

        <button 
            onClick={() => {setOpen(!open)}} 
            className={`${navStyle.hamburger} ${open ? navStyle.open : null}`}
        > 
            <RiMenu5Line /> 
        </button>
        {open ? <Navigation open={open} setOpen={setOpen}/> : null}


        </div>

    )
}

export default Hamburger;