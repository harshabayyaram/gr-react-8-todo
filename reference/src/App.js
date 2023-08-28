import React, { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      checked: false,
      todo: "Update Resume",
    },
    {
      id: 2,
      checked: false,
      todo: "Complete React Exercises",
    },
  ]);

  const [input, setInput] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (input.trim().length === 0) alert("ToDo cannot be empty");
    else {
      const newToDo = {
        id: todos.length + 1,
        checked: false,
        todo: input,
      };
      console.log(newToDo);
      setTodos([...todos, newToDo]);
      setInput("");
    }
  };

  const toggleCheckbox = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  console.log(todos);

  return (
    <div className="main">
      <h1 className="my-5 text-center text-[30px]">My ToDo List</h1>

      <div className="list w-full flex justify-center">
        <div className="todos grid p-5 rounded-2xl bg-black justify-center drop-shadow-2xl">
          {todos.map((todo, i) => (
            <div className="wrapper flex items-center  my-2 text-white" key={i}>
              <input
                type="checkbox"
                className="mx-2 cursor-pointer"
                checked={todo.checked}
                onChange={() => toggleCheckbox(todo.id)}
              />
              {todo.checked ? (
                <p className="line-through text-red-400">{todo.todo}</p>
              ) : (
                <p>{todo.todo}</p>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="user w-full flex my-10 justify-center">
        <form onSubmit={addTodo}>
          <input
            className="border-2  border-b-black outline-none mx-3 p-1"
            type="text"
            placeholder="Add a ToDo ..."
            required
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="bg-black border-2 border-black py-2 px-3 text-white rounded-lg hover:bg-white hover:text-black hover:border-2 hover:border-black">
            Add ToDo
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
