import { Component, ElementRef, Output, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Task } from '../services/service.model';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
interface Assigned {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss'],
})
export class NewTodoComponent {
  @Output() newItemEvent = new EventEmitter<Task>();
  @Output() deleteEvent = new EventEmitter<number>();
  @ViewChild('newItemTxt') newItemTxt: ElementRef;
  @ViewChild('newItem') newItem: ElementRef;

  selectedValue: string;
  newItemControl = new FormControl('');
  task: Task;

  people: Assigned[] = [
    { value: 'Dennis', viewValue: 'Dennis' },
    { value: 'Rodrigo', viewValue: 'Rodrigo' },
    { value: 'Enrique', viewValue: 'Enrique' },
  ];

  constructor(private snackbar: MatSnackBar) {}

  addNewTask(itemTask: string, itemAsig: string): void {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let taskDate = day + '/' + month + '/' + year;

    if (itemTask.trim() === '') {
      this.snackbar.open('Cannot create an empty task', '', {
        duration: 3000,
        panelClass: ['error-snackbar'],
      });
      return;
    }

    const task = {
      task: itemTask.toLocaleLowerCase(),
      assigned: itemAsig,
      status: 'Active',
      date: taskDate,
      completed: false,
    };
    this.newItemEvent.emit(task);
    this.newItemTxt.nativeElement.value = '';
    this.newItemControl.setValue(this.people[0].value);
  }

  deleteTask(index: number): void {
    this.deleteEvent.emit(index);
  }
}
