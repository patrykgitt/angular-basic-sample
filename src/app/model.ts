export class Model {
  user;
  items;
  constructor() {
    this.user = 'Adam';
    this.items = [
      new TodoItem('Kupic kwiaty', false),
      new TodoItem('Kupic buty', false),
    ];
  }
}
export class TodoItem {
  action;
  done;

  constructor(action, done) {
    this.action = action;
    this.done = done;
  }
}
