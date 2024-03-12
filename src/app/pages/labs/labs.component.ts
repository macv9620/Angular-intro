import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css',
})
export class LabsComponent {
  valueInput = signal("");

  changeTextKeyboard(event: KeyboardEvent) {
    const elementInput = event.target as HTMLInputElement;
    this.valueInput.set(elementInput.value);
  }
}
