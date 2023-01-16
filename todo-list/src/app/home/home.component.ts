import { Component, OnInit } from '@angular/core';

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
  todos = ['Make A Todo List', 'Learn Reactive Forms', 'Learn Angular'];

  options: Filter[] = [
    { value: 'name-0', viewValue: 'Assigned To' },
    { value: 'completed-1', viewValue: 'Completed' },
    { value: 'active-2', viewValue: 'Active' },
  ];

  addNewTodo(todo: string): void {
    this.todos.push(todo);
  }

  constructor() {}

  ngOnInit(): void {}
}
