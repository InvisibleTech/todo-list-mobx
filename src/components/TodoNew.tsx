import { useCallback, useState } from 'react';
import { useStore } from '../stores/use-store';
import { onEnterPress } from '../ui-helpers/on-enter';

export const TodoNew = () => {
  const [newTodo, setNewTodo] = useState('');
  const todoList = useStore();

  const addTodo = useCallback(() => {
    todoList.addTodo(newTodo);
    setNewTodo('');
  }, [newTodo, todoList]);

  return (
    <div className="todo-new">
      <input
        type="text"
        value={newTodo}
        onKeyDown={onEnterPress(addTodo)}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
};
