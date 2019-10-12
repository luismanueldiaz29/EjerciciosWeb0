import { Component, OnInit } from '@angular/core';
import { TaskserviceService } from '../Services/taskservice.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks:Task[];
  constructor(private taskDataService: TaskserviceService) { }

  ngOnInit() {
    this.taskDataService.getHeroes().subscribe(tasks=>this.tasks=tasks);
  }
 
  delete(task: Task): void {
    this.tasks = this.tasks.filter(t => t != task);
    this.taskDataService.deleteHero(task).subscribe();
  }

}
