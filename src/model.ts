export interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}
// import { useReducer } from 'react';

// type Actions =
//   | { type: 'add'; payload: string }
//   | { type: 'remove'; payload: number }
//   | { type: 'done'; payload: number };

// const TodoReducer = (state: Todo[], action: Actions) => {
//   switch (action.type) {
//     case 'add':
//       return [
//         ...state,
//         { id: Math.random() * 1000, todo: action.payload, isDone: false },
//       ];
//     case 'remove':
//       return state.filter((item) => item.id !== action.payload);
//     case 'done':
//       return state.map((item) => {
//         if (item.id === action.payload) {
//           return { ...item, isDone: !item.isDone };
//         }
//         return item;
//       });
//     default:
//       return state;
//   }
// };

// const ReducerExample = () => {
//   const [state, dispatch] = useReducer(TodoReducer, []);

//   return <div />;
// };
