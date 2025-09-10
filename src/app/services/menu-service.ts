import { Injectable } from '@angular/core';
import { MenuInterface } from '../interfaces/menu-interface';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private listMenu:MenuInterface[] = [
    {tittle:'Clientes', icon:'client', url:'clients'},
    {tittle:'Facturas', icon:'invoice', url:'invoices'},
  ]

  getMenu(){
    return [...this.listMenu]
  }
  
  getMenuByUrl( url: string){
    return this.listMenu.find(
      (menu)=> {
        menu.url.toLowerCase() === url.toLowerCase()
      }
    ) as MenuInterface
  }
}
