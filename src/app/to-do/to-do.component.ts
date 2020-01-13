import { Component, OnInit } from '@angular/core';
import { tasks, taskModel } from '../tasks';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  tasks = tasks;

  constructor() { }
  filterTask: string = "";

  addTask(newTask) {
    tasks.push({ task: newTask, completed: false });
  }

  removeTask(searchTask) {
    const index = tasks.indexOf(searchTask);
    tasks.splice(index, 1);
  }

  taskCompleted(task) {
    task.completed = true;
  }

  searchTasks(userInput: string, task: taskModel): boolean {
    if (task.task.toLowerCase().search(userInput.toLowerCase()) == -1) {
      return false;
    } else {
      return true;
    }
  }

  ngOnInit() { }
}

interface Todo {
  task: string;
  completed: boolean;
}
