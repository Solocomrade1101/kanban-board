import React from 'react';
import main from './Main.module.css'
import { Routes, Route } from "react-router-dom"
import Board from './board/Board'
import TaskDetail from './taskDetail/TaskDetail'

function Main(props) {
   return (
      <main className={main.main}>
         <Routes>
            <Route exact path={'/'} element={<Board {...props}/>}/>
            <Route path={"/tasks/:taskId"} element={<TaskDetail {...props} />}/>
         </Routes>
      </main>
   );
}

export default Main;