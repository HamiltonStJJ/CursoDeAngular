import { Component } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  imports: [MatIconModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})

export class Login {

  constructor(private iconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon("logo",
      domSanitizer.bypassSecurityTrustResourceUrl("assents/icons/logo.svg")
    );
  }
}
