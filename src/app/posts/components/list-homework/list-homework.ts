import { Component, inject, OnInit } from '@angular/core';
import { Container } from '../../../components/container/container';
import { DogService, IDogWithInfo } from '../../services/dog-service';

@Component({
  selector: 'app-list-homework',
  imports: [Container],
  templateUrl: './list-homework.html',
  styleUrl: './list-homework.css'
})

export class ListCards implements OnInit {
  dogs: IDogWithInfo[] = [];
  loading = false;
  error: string | null = null;
  dogService = inject(DogService);

  ngOnInit(): void {
    this.loading = true;
    this.error = null;
    
    console.log('Iniciando carga de perros...');
    
    this.dogService.getDogsWithInfo().subscribe({
      next: (data: IDogWithInfo[]) => {
        console.log('Datos recibidos:', data);
        console.log('Número total de perros:', data.length);
        this.dogs = data;
        this.loading = false;
      },
      error: (err: any) => {
        console.error('Error al cargar los perros:', err);
        this.error = 'Error al cargar los perros. Revisa la consola para más detalles.';
        this.loading = false;
      }
    });
  }
}