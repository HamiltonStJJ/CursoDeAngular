import { inject, Injectable } from '@angular/core';
import { IconInterface } from '../interfaces/icon-interface';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class IconService {
  private listIcons: IconInterface[] = [
    { name:'logo', path:'./assents/icons/logo.svg'},
    { name:'client', path:'./assents/icons/client.svg'},
    { name:'invoice', path:'./assents/icons/invoice.svg'},
    { name:'user', path:'./assents/icons/user.svg'},
  ]

  matIconRegistry = inject(MatIconRegistry)
  domSanitizaer = inject(DomSanitizer)

  constructor(){
    this.registryIcons()
  }

  registryIcons() {
    this.listIcons.forEach((icon) => {
      this.matIconRegistry.addSvgIcon(
        icon.name,
        this.domSanitizaer.bypassSecurityTrustResourceUrl(icon.path))
    })
  }
}
