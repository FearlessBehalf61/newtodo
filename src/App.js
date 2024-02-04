import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import React, { useState, useEffect } from "react";

function App() {
  const getItemFromLocalStorage = () => {
    let data = localStorage.getItem("Your_TODO_List_Items");
    if (data) return JSON.parse(data);
    else return [];
  };
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState(getItemFromLocalStorage());

  useEffect(() => {
    localStorage.setItem("Your_TODO_List_Items", JSON.stringify(taskList));
  }, [taskList]);
  const preventReLoad = (e) => {
    e.preventDefault();
    setTaskList([...taskList, { task }]);
    setTask("");
  };
  const deleteItem = (i) => {
    let newTaskList = [...taskList];
    newTaskList.splice(i, 1);
    setTaskList(newTaskList);
  };

  const toggleTaskStatus = (i) => {
    const newTaskList = [...taskList];
    newTaskList[i].completed = !newTaskList[i].completed;
    setTaskList(newTaskList);
  };

  let renderList = <h5>Your list is empty</h5>;
  if (taskList.length > 0) {
    renderList = taskList.map((t, i) => {
      return (
        <div className="listdiv" key={i}>
          <li className="listItem" key={i}>
            <div className="taskName">
              <input
                type="checkbox"
                checked={t.completed}
                onChange={() => toggleTaskStatus(i)}
              />
              <h5
                className={t.completed ? "completed" : ""}
                onClick={() => toggleTaskStatus(i)}
              >
                {t.task}
              </h5>
            </div>
            <button
              className="deletebtn"
              onClick={() => {
                deleteItem(i);
              }}
            >
              Delete
            </button>
          </li>
        </div>
      );
    });
  } else {
    renderList = <h5 className="listEmpty">Your list is empty</h5>;
  }

  return (
    <div className="App">
      <Header title="Todo List" />
      <Main
        setTask={setTask}
        getItemFromLocalStorage={getItemFromLocalStorage}
        deleteItem={deleteItem}
        preventReLoad={preventReLoad}
        task={task}
        taskList={taskList}
        renderList={renderList}
      />
      <Footer taskLength={taskList.length} />
    </div>
  );
}

export default App;
