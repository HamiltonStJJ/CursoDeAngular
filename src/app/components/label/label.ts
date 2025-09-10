import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-label',
  imports: [CommonModule],
  templateUrl: './label.html',
  styleUrl: './label.css'
})
export class Label {
  @Input() text!: string;
  @Input() required: boolean = false;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() color: string = 'inherit';
  @Input() bold: boolean = false;
  @Input() for?: string;
}
