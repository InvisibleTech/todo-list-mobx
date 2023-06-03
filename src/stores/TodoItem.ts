import { action, makeObservable, observable } from 'mobx';

export type funFactor = undefined | 'yes' | 'no' | 'meh';

export default class TodoItem {
  id = Date.now();

  text: string = '';
  isDone: boolean = false;
  fun: funFactor = undefined;

  constructor(text: string) {
    // For a shorter version see makeAutoObservable
    makeObservable(this, {
      text: observable,
      isDone: observable,
      fun: observable,
      toggleIsDone: action,
      updateText: action,
      updateFun: action,
      thatWasFun: action,
      wouldRatherHaveDoneSomethingElse: action,
      letsNotDoThatAgain: action,
    });

    this.text = text;
  }

  toggleIsDone = () => {
    this.isDone = !this.isDone;
  };

  // Making this function an action has benefits: https://mobx.js.org/actions.html
  thatWasFun = () => {
    this.toggleIsDone();
    this.updateFun('yes');
  };

  wouldRatherHaveDoneSomethingElse = () => {
    this.toggleIsDone();
    this.updateFun('meh');
  };

  letsNotDoThatAgain = () => {
    this.toggleIsDone();
    this.updateFun('no');
  };

  updateText = (text: string) => (this.text = text);

  updateFun = (fun: funFactor) => (this.fun = fun);
}
