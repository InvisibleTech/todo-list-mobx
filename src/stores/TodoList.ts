import { action, computed, makeObservable, observable } from 'mobx';
import TodoItem from './TodoItem';

export class TodoList {
  list: TodoItem[] = [];

  constructor(todos: string[]) {
    makeObservable(this, {
      list: observable.shallow,
      addTodo: action,
      removeTodo: action,
      finishedTodos: computed,
      openTodos: computed,
    });

    todos.forEach(this.addTodo);
  }

  addTodo = (todo: string) => this.list.push(new TodoItem(todo));

  removeTodo = (todo: TodoItem) => this.list.splice(this.list.indexOf(todo), 1);

  get finishedTodos() {
    return this.list.filter((t) => t.isDone);
  }

  get openTodos() {
    return this.list.filter((t) => !t.isDone);
  }
}
