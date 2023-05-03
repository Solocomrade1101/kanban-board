import React from 'react';
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./List.css";
import Form from "./form/Form";
import Dropdown from "../list/dropdown/Dropdown";



function List(props) {

   const { title, type, tasks, addNewTask, prevTasks, moveTask } = props;
   const [isFormShowed, setFormShowed] = useState(false);
   const listContainer = useRef();

   useEffect(() => {
      listContainer.current.scrollTop = listContainer.current.scrollHeight;
   }, [isFormShowed])

   const handleCLick = () => {
      setFormShowed(!isFormShowed);
   }

   return (
      <div className="list">
         <h3 className="list-title">{title}</h3>
         <div className="list-container" ref={listContainer}>
            {tasks.map((task) => {
               return (
                  <Link key={task.id} to={`/tasks/${task.id}`} className="list-link">
                     <div className="list-task">{task.title}</div>
                  </Link>
               )
            })}
            {isFormShowed === false && (
               <button
                  className={`button list-button ${(type !== "Backlog" && prevTasks.length === 0) ? "button-disabled" : ""}`}
                  onClick={handleCLick}
                  type="text"
                  disabled={(type !== "Backlog" && prevTasks.length === 0) ? true : false}>
                  <span className="list-plus">+&thinsp;</span>Add card
               </button>
            )}
            {isFormShowed && type === "Backlog" && (
               <Form addNewTask={addNewTask} setFormShowed={setFormShowed} />
            )}
            {isFormShowed && type !== "Backlog" && (
               <Dropdown prevTasks={prevTasks} isFormShowed={isFormShowed} setFormShowed={setFormShowed} type={type} moveTask={moveTask} />
            )}
         </div>
      </div>
   );
}

export default List;