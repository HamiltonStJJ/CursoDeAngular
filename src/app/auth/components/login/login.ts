import { Component } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DomSanitizer } from '@angular/platform-browser';
import { Button } from "../../../components/button/button";
import { InputComponent } from "../../../components/input/input";
import { Label } from "../../../components/label/label";

@Component({
  selector: 'app-login',
  imports: [MatIconModule, MatButtonModule, Button, InputComponent, Label],
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
