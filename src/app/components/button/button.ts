import { Component, Input } from '@angular/core';
import { MatButtonAppearance, MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-button',
  imports: [MatButtonModule],
  templateUrl: './button.html',
  styleUrl: './button.css'
})

export class Button {

  @Input () label!: string
  @Input () type!: MatButtonAppearance
  @Input () color!: string
}
