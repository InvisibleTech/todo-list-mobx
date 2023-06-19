import { useCallback, useState } from 'react';

import TodoItemModel from '../stores/TodoItem';
import { useStore } from '../stores/use-store';
import { onEnterPress } from '../ui-helpers/on-enter';
import { SiHappycow } from 'react-icons/si';
import { ImSad, ImNeutral2 } from 'react-icons/im';

export const TodoItem = (props: { todo: TodoItemModel }) => {
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
          <button disabled={todo.isDone} onClick={todo.thatWasFun}>
            <SiHappycow color={todo.fun === 'yes' ? 'green' : undefined} />
          </button>
          <button disabled={todo.isDone} onClick={todo.wouldRatherHaveDoneSomethingElse}>
            <ImNeutral2 color={todo.fun === 'meh' ? 'green' : undefined} />
          </button>
          <button disabled={todo.isDone} onClick={todo.letsNotDoThatAgain}>
            <ImSad color={todo.fun === 'no' ? 'green' : undefined} />
          </button>
          <button onClick={() => setIsEditing(true)} disabled={todo.isDone}>
            edit
          </button>
          <button onClick={() => todoList.removeTodo(todo)}>X</button>
        </div>
      )}
    </div>
  );
};
