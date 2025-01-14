import Todo from "../../models/todo.js";

// @ts-ignore
const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/terryphelps/todos/',
	timeout: 3000
});

let _state = {
	todos: [],
	//	error: {},
}
let _subscribers = {
	todos: [],
	//	error: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn())
}

export default class TodoService {

	get Todos() {
		return _state.todos
	}

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	getTodos() {
		console.log("Getting the Todo List")
		todoApi.get()
			.then(res => {
				console.log("Got the Todo List", res)
				let serverTodos = res.data.data
				let todos = serverTodos.map(t => new Todo(t))
				_setState('todos', todos)
				// WHAT DO YOU DO WITH THE RESPONSE?
			})
			.catch(err => _setState('error', err.response.data))
	}

	addTodo(newTodo) {
		todoApi.post('', newTodo)
			.then(res => {
				let serverTodos = res.data.data
				let todo = new Todo(serverTodos)
				let todos = this.Todos
				todos.unshift(todo)
				_setState('todos', todos)
				// WHAT DO YOU DO AFTER CREATING A NEW TODO?
			})
			.catch(err => _setState('error', err.response.data))
	}

	toggleTodoStatus(todoId) {
		let todo = _state.todos.find(todo => todo._id == todoId)
		todo.completed = !todo.completed

		todoApi.put(todoId, todo)
			.then(res => {
				console.log(res.data.message)
				this.getTodos()
			})
			.catch(err => _setState('error', err.response.data))
	}

	removeTodo(todoId) {
		todoApi.delete(todoId)
			.then(() => {
				this.getTodos()
			})
			.catch(err => _setState('error', err.response.data))
	}

}
