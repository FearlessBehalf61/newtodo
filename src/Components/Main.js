import React from "react";

const Main = ({
  preventReLoad,
  getItemFromLocalStorage,
  deleteItem,
  task,
  setTask,
  taskList,
  renderList,
}) => {
  return (
    <main>
      <form className="form" onSubmit={(e) => preventReLoad(e)}>
        <input
          className="inputbox"
          type="text"
          value={task}
          required
          placeholder="Enter task"
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="addbtn">+</button>
      </form>

      <div className="renderList">{renderList}</div>
    </main>
  );
};

export default Main;
