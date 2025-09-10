import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-field',
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, CommonModule],
  templateUrl: './form-field.html',
  styleUrl: './form-field.css'
})

export class FormField {
  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() type: 'text' | 'password' | 'email' | 'number' = 'text';
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() icon?: string;
  @Input() appearance: 'fill' | 'outline' = 'outline';
  @Input() hint?: string;
  @Input() error?: string;
  @Input() value: string = '';
  
  @Output() valueChange = new EventEmitter<string>();
  @Output() inputEvent = new EventEmitter<Event>();
  @Output() blurEvent = new EventEmitter<Event>();
  @Output() focusEvent = new EventEmitter<Event>();

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.valueChange.emit(this.value);
    this.inputEvent.emit(event);
  }

  onBlur(event: Event): void {
    this.blurEvent.emit(event);
  }

  onFocus(event: Event): void {
    this.focusEvent.emit(event);
  }
}
