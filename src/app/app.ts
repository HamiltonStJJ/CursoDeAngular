import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Menu } from "./components/menu/menu";
import { IconService } from './services/icon-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatSidenavModule, Menu], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('appComponents');
  constructor(private iconService: IconService){
  }
}
