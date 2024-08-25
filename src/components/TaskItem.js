import React from "react";

function TaskItem({ task, deleteTask, markAsDone, handleDragStart }) {
  return (
    <div className="task-item" draggable onDragStart={handleDragStart}>
      <span dangerouslySetInnerHTML={{ __html: task.text }}
       className={task.format}
       ></span>

      <div className="info">
        {task.tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}

        {deleteTask && (
          <button className="delete" onClick={deleteTask}>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.875 5.04175L17.3069 14.2314C17.1617 16.5793 17.0892 17.7533 16.5007 18.5973C16.2097 19.0146 15.8351 19.3668 15.4006 19.6314C14.5219 20.1667 13.3457 20.1667 10.9933 20.1667C8.63786 20.1667 7.46011 20.1667 6.5808 19.6304C6.14607 19.3653 5.77133 19.0125 5.48046 18.5945C4.89214 17.7491 4.82116 16.5735 4.67923 14.2223L4.125 5.04175"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M2.75 5.04159H19.25M14.7177 5.04159L14.092 3.75067C13.6763 2.89316 13.4684 2.4644 13.1099 2.19699C13.0304 2.13768 12.9462 2.08491 12.8581 2.03923C12.4611 1.83325 11.9846 1.83325 11.0316 1.83325C10.0547 1.83325 9.56633 1.83325 9.16271 2.04786C9.07326 2.09543 8.9879 2.15033 8.90752 2.21199C8.54484 2.49023 8.34224 2.93467 7.93706 3.82357L7.38184 5.04159"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M8.70837 15.125V9.625"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M13.2916 15.125V9.625"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </button>
        )}
        {markAsDone && (
          <button className="done" onClick={markAsDone}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="28"
              height="28"
              color="#efebeb"
              fill="none"
            >
              <path
                d="M5 14L8.5 17.5L19 6.5"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

export default TaskItem;
