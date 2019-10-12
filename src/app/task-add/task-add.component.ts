import { Component, OnInit } from '@angular/core';
import { TaskserviceService } from '../Services/taskservice.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {

 
  task:Task;
  constructor(private taskDataServicd:TaskserviceService) { }

  ngOnInit() {
    this.task={id:0,title:'', description:'', priority:false}
    console.log('se inicializa el objeto task');
  }


  add(): void{
    this.taskDataServicd.addHero(this.task).subscribe();
    alert('se agrego una nueva tarea');
  }

}
