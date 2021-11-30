import {Route, Switch} from 'react-router-dom';
import ToAddPage from './pages/ToAdd';
import ToExamPage from './pages/ToExam';
import ToLearnPage from './pages/ToLearn';
import StartPage from './pages/Start';
import Navigation from "./components/Navigation";
import Exam from './pages/Exam';
import Style from './styles/app.module.scss';
import Hamburger from './components/Hamburger';


function App() {

  return (
    <div className={Style.app}>
      <Hamburger />
      <Navigation />
      <Switch>
       <Route path='/' exact>
          <StartPage />
        </Route>
        <Route path='/learn'>
          <ToLearnPage />
        </Route>
        <Route path='/exam'>
          <ToExamPage />
        </Route>
        <Route path='/add-new-card'>
          <ToAddPage />
        </Route>
        <Route path='/the-exam'>
          <Exam />
        </Route>
      </Switch>
    </div>

  );
}

export default App;
