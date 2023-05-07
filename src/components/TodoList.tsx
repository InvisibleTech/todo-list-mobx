// TODO: read this https://github.com/mobxjs/mobx/discussions/3391

import { useObserver } from 'mobx-react-lite';
import { useStore } from '../stores/use-store';
import TodoItem from './TodoItem';

export const TodoList = () => {
  const todoList = useStore();

  return useObserver(() => (
    <div className="todo-list">
      <div className="open-todos">
        <span>Open Todos</span>
        {todoList.openTodos.map((todo) => (
          <TodoItem key={`${todo.id}-${todo.text}`} todo={todo} />
        ))}
      </div>
      <div className="finished-todos">
        <span>Finished Todos</span>
        {todoList.finishedTodos.map((todo) => (
          <TodoItem key={`${todo.id}-${todo.text}`} todo={todo} />
        ))}
      </div>
    </div>
  ));
};
