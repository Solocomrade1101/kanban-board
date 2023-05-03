import {React, useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

function App(props) {

  const initialState = JSON.parse(window.localStorage.getItem("tasks")) || [];
  const [tasks, setTasks] = useState(initialState);
  const user = props.state

  useEffect(() => {
    window.localStorage.setItem("tasks",JSON.stringify(tasks));
  }, [tasks]);

  return (
      <Router>
        <div className="App">
            <Header />
            <Main tasks={tasks} setTasks={setTasks} state={props.state} />
            <div className='content'>
              <Footer tasks={tasks} name={user.name} year={user.year}/>
            </div>
        </div>
      </Router>
    
  );
}

export default App;
