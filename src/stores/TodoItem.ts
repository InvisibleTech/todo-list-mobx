import { action, makeObservable, observable } from 'mobx';

export default class TodoItem {
  id = Date.now();

  text: string = '';
  isDone: boolean = false;

  constructor(text: string) {
    // For a shorter version see makeAutoObservable
    makeObservable(this, {
      text: observable,
      isDone: observable,
      toggleIsDone: action,
      updateText: action,
    });

    this.text = text;
  }

  toggleIsDone = () => (this.isDone = !this.isDone);

  updateText = (text: string) => (this.text = text);
}
