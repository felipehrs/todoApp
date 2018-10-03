import { Component, OnInit } from '@angular/core';
import { TodoService } from './shared/todo.service';
import { createOfflineCompileUrlResolver } from '@angular/compiler';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {
  toDoListArray: any[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    console.log(this.todoService.getTaskList());

  }

  onAdd(itemTitle, itemDescription) {
    this.todoService.addTask(itemTitle.value, itemDescription.value);
    itemTitle.value = null;
  }

  alterCheck($key: Number, isChecked) {
    this.todoService.checkOrUncheckTask($key, !isChecked);
  }

  onDelete($key: Number) {
    this.todoService.removeTask($key);
  }
}
