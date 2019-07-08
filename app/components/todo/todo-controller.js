import TodoService from "./todo-service.js";

const _todoService = new TodoService()

function _drawTodos() {
	//WHAT IS MY PURPOSE: To draw the to do's on the screen?
	let todoElem = document.querySelector("#todos")
	let template = ''
	let todos = _todoService.Todos
	todos.forEach(todo => {
		template += todo.Template
	})
	todoElem.innerHTML = template
}

// function _drawError() {
// 	console.error('[TODO ERROR]', _todoService.TodoError)
// 	//document.querySelector('#todo-error').textContent = `${_todoService.TodoError.message}`
// }

export default class TodoController {
	constructor() {
		//		_todoService.addSubscriber('error', _drawError)
		_todoService.addSubscriber('todos', _drawTodos)
		_todoService.getTodos()
		// Don't forget to add your subscriber
	}

	addTodo(e) {
		e.preventDefault()
		let form = e.target

		let todo = {
			//			completed: form.completed.value,
			//			user: form.user.value,
			description: form.description.value,
			// DONT FORGET TO BUILD YOUR todo OBJECT
		}

		_todoService.addTodo(todo)
		form.reset()
	}

	toggleTodoStatus(todoId) {
		// asks the service to edit the todo status
		_todoService.toggleTodoStatus(todoId)
	}

	removeTodo(todoId) {
		// ask the service to run the remove todo with this id
		_todoService.removeTodo(todoId)
	}



}
