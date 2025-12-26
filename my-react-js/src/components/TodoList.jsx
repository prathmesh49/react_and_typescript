function TodoList() {
  const todos = [
    { id: 1, text: "Learn React" },
    { id: 2, text: "Practice daily" },
    { id: 3, text: "Build project" }
  ];

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}

export default TodoList;