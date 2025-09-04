import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

interface MenuOption {
  route: string;
  icon: string;
  label: string;
}

@Component({
  selector: 'app-menu',
  imports: [MatListModule, MatIconModule, MatButtonModule, RouterModule, CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {
  
  menuOptions: MenuOption[] = [
    { route: '/clients', icon: 'client', label: 'Clientes' },
    { route: '/invoices', icon: 'facts', label: 'Facturas' }
  ];
  
  constructor(private iconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon("logo_menu",
      domSanitizer.bypassSecurityTrustResourceUrl("assents/icons/logo.svg")
    );
    iconRegistry.addSvgIcon("client",
      domSanitizer.bypassSecurityTrustResourceUrl("assents/icons/client.svg")
    );
    iconRegistry.addSvgIcon("facts",
      domSanitizer.bypassSecurityTrustResourceUrl("assents/icons/invoice.svg")
    );
    iconRegistry.addSvgIcon("user",
      domSanitizer.bypassSecurityTrustResourceUrl("assents/icons/user.svg")
    );
  }

}
