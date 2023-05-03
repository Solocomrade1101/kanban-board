import { React, useState } from 'react';
import uniqid from "uniqid";
import board from './Board.module.css'
import List from './list/List';




function Board(props) {
   const { tasks, setTasks, description } = props
   const newTasks = tasks;
   const types = props.state.taskStatus

   const addNewTask = (title) => {
      const newTask = {
         id: uniqid(),
         title: title,
         description: "",
         status: "Backlog"
      };
      setTasks([...tasks, newTask]);
   }

   const moveTask = (id, type) => {
      tasks.map((task, index) => {
         if (task.id === id) {
            const taskToMove = task;
            setTasks(newTasks.splice(index, 1));
            setTasks([...tasks, { ...taskToMove, status: type }]);
         }
      })
   }

   return (

      <div className={board.board}>
         {types.map((type, index) => {
            const ListCurTasks = tasks.filter((task) => task.status === type);
            const ListPrevTasks = tasks.filter((task) => task.status === types[index - 1]);
            return (
               <List
                  key={type}
                  title={type}
                  type={type}
                  tasks={ListCurTasks || []}
                  prevTasks={ListPrevTasks}
                  addNewTask={addNewTask}
                  moveTask={moveTask}
               />
            )
         })}
      </div>
   );
}

export default Board;