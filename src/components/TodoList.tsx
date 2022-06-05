import React from 'react';
import { Todo } from '../model';
import SingleTodo from './SingleTodo';
import './styles.css';

interface Props {
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todoList, setTodoList }: Props) => {
  return (
    <div className='todoList'>
      {todoList.map((item) => {
        return (
          <SingleTodo
            key={item.id}
            todo={item}
            todoList={todoList}
            setTodoList={setTodoList}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
