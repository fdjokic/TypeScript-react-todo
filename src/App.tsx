import React, { useState } from 'react';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Todo } from './model';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodoList([
        ...todoList,
        { id: Math.random() * 1000, todo, isDone: false },
      ]);
      setTodo('');
    }
  };
  console.log(todoList, todo);

  return (
    <div className='app'>
      <span className='heading'>Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
};

export default App;
