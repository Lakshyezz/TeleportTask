import React, { useState } from 'react';

function TaskInput({ addTask }) {
  const [task, setTask] = useState('');
  const [tags, setTags] = useState([]);
  const [format, setFormat] = useState('');

  const handleAddTask = () => {
    if (task) {
      let formattedTask = task;
      if (format === 'H1') {
        formattedTask = `<h1>${task}</h1>`;
      } else if (format === 'Bold') {
        formattedTask = `<b>${task}</b>`;
      } else if (format === 'Italics') {
        formattedTask = `<i>${task}</i>`;
      }
      addTask({ text: formattedTask, tags, format });
      setTask('');
      setTags([]);
      setFormat('');
    }
  };

  return (
    <div className="task-input">

      <div className='input-div'>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTask}>Add</button>
      </div>
    

      <div className='label-div'>
        <div className="format">
          <p> Choose: </p>
          <button onClick={() => setFormat('H1')}>H1</button>
          <button onClick={() => setFormat('Bold')}>Bold</button>
          <button onClick={() => setFormat('Italics')}>Italics</button>
        </div>

        <div className="tags">
        <p> Tags: </p>
          <button onClick={() => setTags([...tags, '#imp'])}>#imp</button>
          <button onClick={() => setTags([...tags, '#todo'])}>#todo</button>
        </div>

      </div>
    </div>
  );
}

export default TaskInput;
