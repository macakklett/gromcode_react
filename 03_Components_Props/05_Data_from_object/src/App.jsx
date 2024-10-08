import React from 'react';

const App = () => {
  return (
    <>
      <h1 className="title">Todo List</h1>
      <main className="todo-list">
        <div className="actions">
          <input className="task-input" type="text" />
          <button className="btn create-task-btn">Create</button>
        </div>
        <ul className="list"></ul>
      </main>
    </>
  );
};

export default App;
