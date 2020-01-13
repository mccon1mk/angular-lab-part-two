import { Component, OnInit } from '@angular/core';
import { tasks } from "../tasks";

@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.css']
})
export class ToDoFormComponent implements OnInit {

  constructor() { }

  addTask(newTask) {
    tasks.push({ task: newTask, completed: false })
  }

  ngOnInit() {
  }

}
