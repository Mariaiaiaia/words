import { NavLink, Link } from "react-router-dom";
import Nav from '../styles/nav.module.scss';
import iconLanguage from '../images/Language.svg';
import iconNotes from '../images/Notes.svg';
import iconTest from '../images/Test.svg';
import { motion } from 'framer-motion';
import logo from '../images/logo.svg';


function Navigation(props) {
    return(

        <motion.header animate={{opacity: 1, transition:{ duration: 0.7}}} initial={{opacity: 0}} className={`${props.open ? Nav.navigator : Nav.hamburger_close}`}>
            
            <Link to='/'className={Nav.logo}>
                <h6>My C<img src={logo} alt="logo"/>rds</h6>
            </Link>
            <ul>
                <li onClick={props.open ? () => {props.setOpen(!props.open)} : null}>
                    <div className={Nav.li_container}>
                        <div className={Nav.icon}>
                            <div className={Nav.circle_add}></div>
                            <img src={iconNotes} alt="add" />
                        </div>
                        <NavLink to='/add-new-card' exact activeClassName={Nav.active}><h6>Add cards</h6></NavLink>
                       
                    </div>
                </li>
                <li onClick={props.open ? () => {props.setOpen(!props.open)} : null}>
                    <div className={Nav.li_container}>
                        <div className={Nav.icon}>
                            <div className={Nav.circle_exam}></div>
                            <img src={iconTest} alt="exam" />
                        </div>
                        <NavLink to='/exam' exact activeClassName={Nav.active}><h6>Test me</h6></NavLink>
                    </div>
                </li>
                <li onClick={props.open ? () => {props.setOpen(!props.open)} : null}>
                    <div className={Nav.li_container}>
                        <div className={Nav.icon}>
                            <div className={Nav.circle_learn}></div>
                            <img src={iconLanguage} alt="learn" />
                        </div>
                        <NavLink to='/learn' exact activeClassName={Nav.active}><h6>Learn words</h6></NavLink>
                    </div>
                </li>
            </ul>
        </motion.header>

    )
};

export default Navigation;