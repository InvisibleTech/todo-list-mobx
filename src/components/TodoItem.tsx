import { useCallback, useState } from 'react';

import TodoItemModel from '../stores/TodoItem';
import { useStore } from '../stores/use-store';
import { onEnterPress } from '../ui-helpers/on-enter';

const TodoItem = (props: { todo: TodoItemModel }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState('');
  const todoList = useStore();

  const { todo } = props;

  // TODO: research is this callback justified?
  const saveText = useCallback(() => {
    todo.updateText(newText);
    setIsEditing(false);
    setNewText('');
  }, [todo, newText]);

  return (
    <div className="todo-item">
      {isEditing ? (
        <div>
          <input type="text" onKeyDown={onEnterPress(saveText)} onChange={(e) => setNewText(e.target.value)} />
          <button onClick={saveText}>save</button>
        </div>
      ) : (
        <div>
          <span>{todo.text}</span>
          <input type="checkbox" onChange={todo.toggleIsDone} defaultChecked={todo.isDone}></input>
          <button onClick={() => setIsEditing(true)}>edit</button>
          <button onClick={() => todoList.removeTodo(todo)}>X</button>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
