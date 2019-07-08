export default class Todo {
  constructor(data) {
    this._id = data._id
    this.completed = data.completed
    this.user = data.user
    this.description = data.description
  }
  get Template() {
    if (this.completed) {
      return `<div id="todo-ck" class="col-1"><input onclick="app.controllers.todoController.toggleTodoStatus('${this._id}')" type="checkbox" checked></div>
							<div id="todo-desc" class="col-8"><h3><s style="color: red">${this.description}</s></h3></div>
							<div id="todo_btn" class="col-3"><button onclick="app.controllers.todoController.removeTodo('${this._id}')" class="btn btn-primary">Delete</button></div>
							`
    } else {
      return `<div id="todo-ck" class="col-1"><input onclick="app.controllers.todoController.toggleTodoStatus('${this._id}')" type="checkbox"></div>
							<div id="todo-desc" class="col-8"><h3>${this.description}</h3></div>
              <div id="todo_btn" class="col-3"><button onclick="app.controllers.todoController.removeTodo('${this._id}')" class="btn btn-primary">Delete</button></div>
              `
    }
  }
}