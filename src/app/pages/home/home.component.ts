import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TaskModel } from './models/home.component.models';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tasks = signal<TaskModel[]>([])

  initialTask = {
    id: 0,
    description: "",
    completed: false
  }

  newTask: TaskModel = {...this.initialTask};

  handleInputNewTask (event : Event){
    //Get input info
    const elementInput = event.target as HTMLInputElement;
    const description = elementInput.value;
    this.newTask.description = description
  }

  handleCreateNewTask () {
    if(this.newTask.description !== ""){
      const id = Date.now()
      const completed = false

      this.tasks.update((previousTasks) => [...previousTasks, {...this.newTask, id, completed}])
      this.newTask = {
        id: 0,
        description: "",
        completed: false
      }
    }

  }

  handleDeleteNewTask(index: number){
    this.tasks.update((previosTasks) => previosTasks.filter((task, i) => index !== i))
  }
}
