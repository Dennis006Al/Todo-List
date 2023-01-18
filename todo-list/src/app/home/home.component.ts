import { Component, OnInit } from '@angular/core';
import { Task } from '../services/service.model';
import * as _ from 'lodash';
interface Filter {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  selectedValue: string;
  searchText: string;
  status = ['Task', 'Assigned To', 'Status', 'Date', 'Delete'];
  todos = [];
  filteredTodos: Task[] = [];

  options: Filter[] = [
    { value: 'name-0', viewValue: 'Name' },
    { value: 'complete-1', viewValue: 'Complete' },
    { value: 'active-2', viewValue: 'Active' },
  ];

  constructor() {
    this.todos = JSON.parse(localStorage.getItem('todos')) || [];
    this.filteredTodos = this.todos;
  }

  ngOnInit(): void {}

  addNewTodo(task: Task): void {
    let taskCopy = _.cloneDeep(task);
    this.filteredTodos = [...this.filteredTodos, taskCopy];
    localStorage.setItem('todos', JSON.stringify(this.filteredTodos));
  }

  deleteTask(i: number) {
    this.todos.splice(i, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  changeStatus(todo: Task) {
    if (todo.status === 'Active') {
      todo.status = 'Complete';
      todo.completed = true;
    } else {
      todo.status = 'Active';
      todo.completed = false;
    }
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  filterTodos(searchText: string) {
    if (!searchText || searchText.length < 3) {
      this.filteredTodos = [...this.todos];
    } else {
      this.filteredTodos = [...this.todos].filter(
        (todo) =>
          todo.task.toLowerCase().includes(searchText.toLowerCase()) &&
          todo.status === 'Active'
      );
    }
  }

  filterBy(status: string) {
    this.filteredTodos = [...this.todos].filter(
      (todo) => todo.status === status
    );
  }

  filterByName(name: string) {
    this.filteredTodos = [...this.todos].filter(
      (todo) => todo.assigned === name
    );
  }
}
