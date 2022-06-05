import React, { useState, useRef, useEffect } from 'react';
import { Todo } from '../model';
import { AiFillEdit } from 'react-icons/ai';
import { AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';

type Props = {
  todo: Todo;
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todoList, setTodoList }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDone = (id: number) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      })
    );
  };

  const handleDelete = (id: number) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodoList(
      todoList.map((item) => {
        if (item.id === id) {
          return { ...item, todo: editTodo };
        }
        return item;
      })
    );
    setEdit(false);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form className='todoList__single' onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          type='text'
          ref={inputRef}
          value={editTodo}
          className='todoList__single--test'
          onChange={(e) => setEditTodo(e.target.value)}
        />
      ) : todo.isDone ? (
        <strong className='todoList__single--text'>{todo.todo}</strong>
      ) : (
        <span className='todoList__single--text'>{todo.todo}</span>
      )}

      <div className='todo-container'>
        <span
          className='icon'
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className='icon' onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className='icon' onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
