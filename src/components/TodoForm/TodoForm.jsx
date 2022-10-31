import React, { useState } from "react";
import "./TodoForm.css";
function TodoForm(props) {
  const [todoText, setTodoText] = useState(props.edit ? props.edit.text : "");
  const [todoPriority, setTodoPriority] = useState(
    props.edit ? props.edit.priority : "low"
  );



  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText.length === 0) {
      alert("Please Input a todo");
    } else {
      props.onSubmit({
        text: todoText,
        priority: todoPriority,
        id: Math.floor(Math.random() * 10000),
      });
      props.setIsOpen(false);
      setTodoPriority("");
      setTodoText("");
    }
  };

  const handleChange = (e) => {
    console.log("This is target value" + e.target.value);

    setTodoPriority(e.target.value);
  };

  return (
    <>
      <div className="darkBG">
        <div className="centered">
          <div className="modal">
            <div className="modalHeader">
              {props.edit ? (
                <h5 className="heading">Update Todo</h5>
              ) : (
                <h5 className="heading">Add Todo</h5>
              )}
            </div>
            <div className="modalContent">
              <form className="modalForm" onSubmit={handleSubmit}>
                <label className="label">
                  Add Todo:
                  <input
                    className="todo-add"
                    placeholder="Add Todo"
                    value={todoText}
                    onChange={(e) => setTodoText(e.target.value)}
                    type="text"
                  />
                </label>
                <label className="label">
                  Choose Priority
                  <select
                    className="choosePriority"
                    value={todoPriority}
                    onChange={handleChange}
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">high</option>
                  </select>
                </label>
              </form>
            </div>
            <div className="modalActions">
              <div className="actionsContainer">
                <button
                  className="cancelBtn"
                  onClick={() => props.setIsOpen(false)}
                >
                  Cancel
                </button>
                {props.edit ? (
                  <button className="submit" onClick={handleSubmit}>
                    Edit Todo
                  </button>
                ) : (
                  <button className="submit" onClick={handleSubmit}>
                    Submit
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoForm;
