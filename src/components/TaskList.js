import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ title, tasks, deleteTask, markAsDone, handleDragStart }) {
  return (
    <div className="task-list">
      <h2>{title}</h2>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          deleteTask={deleteTask ? () => deleteTask(index) : null}
          markAsDone={markAsDone ? () => markAsDone(index) : null}
          handleDragStart={handleDragStart ? (e) => handleDragStart(e, index) : null}
        />
      ))}
    </div>
  );
}

export default TaskList;
