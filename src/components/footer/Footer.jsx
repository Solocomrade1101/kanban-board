import React from "react";
import "./Footer.css";



const Footer = (props) => {
   const { tasks, name, year } = props;
   const activeTasks = tasks.filter(task => task.status === "Backlog");
   const finishedTasks = tasks.filter(task => task.status === "Finished");

   return (
      <footer className="footer">
         <div className="count">
            <div className={`count-item ${(activeTasks.length === 0 || !finishedTasks.length === 0) ? "count-item-single" : ""}`}>
               {activeTasks.length ? `Active tasks: ${activeTasks.length}` : null}
            </div>
            <div className="count-item">
               {finishedTasks.length ? `Finished tasks: ${finishedTasks.length}` : null}
            </div>
         </div>
         <div>Kanban board by {props.name}, {props.year}</div>
      </footer>
   )
}

export default Footer;