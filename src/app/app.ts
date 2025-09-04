import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from "./auth/components/login/login";
import { MatSidenavModule } from '@angular/material/sidenav';
import { Menu } from "./components/menu/menu";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, MatSidenavModule, Menu], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('appComponents');
}
