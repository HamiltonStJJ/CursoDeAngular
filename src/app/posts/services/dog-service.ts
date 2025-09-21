import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, catchError, throwError, map, forkJoin, switchMap } from 'rxjs';

export interface IDogWithInfo {
  imageUrl: string;
  breed: string;
  subBreed?: string;
  fullName: string;
}

@Injectable({
  providedIn: 'root'
})
export class DogService {
  private baseUrl = 'https://dog.ceo/api';
  
  http = inject(HttpClient);

  // Método 1: Obtiene todas las razas disponibles
  getAllBreeds(): Observable<{[breed: string]: string[]}> {
    return this.http.get<{ message: {[breed: string]: string[]}, status: string }>(`${this.baseUrl}/breeds/list/all`).pipe(
      map(response => response.message),
      catchError(this.handleError)
    );
  }

  // Método 2: Obtiene todos los perros con información
  getDogsWithInfo(): Observable<IDogWithInfo[]> {
    return this.getAllBreeds().pipe(
      switchMap(breeds => {
        const selectedBreeds: {breed: string, subBreed?: string}[] = [];
        const breedNames = Object.keys(breeds);
        
        // Tomar TODAS las razas sin límite
        for (const breed of breedNames) {
          const subBreeds = breeds[breed];
          
          if (subBreeds.length > 0) {
            // Si tiene subrazas, tomar todas
            for (const subBreed of subBreeds) {
              selectedBreeds.push({ breed, subBreed });
            }
          } else {
            selectedBreeds.push({ breed });
          }
        }
        
        // Crear observables para obtener imágenes
        const imageObservables = selectedBreeds.map(({breed, subBreed}) => {
          const url = subBreed 
            ? `${this.baseUrl}/breed/${breed}/${subBreed}/images/random`
            : `${this.baseUrl}/breed/${breed}/images/random`;
          
          return this.http.get<{message: string, status: string}>(url).pipe(
            map(response => ({
              imageUrl: response.message,
              breed,
              subBreed,
              fullName: subBreed ? `${breed} ${subBreed}` : breed
            } as IDogWithInfo)),
            catchError(() => {
              // Si falla obtener la imagen, devolver solo con datos básicos
              return [{
                imageUrl: '',
                breed,
                subBreed,
                fullName: subBreed ? `${breed} ${subBreed}` : breed
              } as IDogWithInfo];
            })
          );
        });
        
        return forkJoin(imageObservables);
      }),
      catchError(this.handleError)
    );
  }

  private handleError = (error: HttpErrorResponse) => {
    console.error('Dog API Error details:', error);
    console.error('Status:', error.status);
    console.error('Status Text:', error.statusText);
    console.error('URL:', error.url);
    console.error('Error message:', error.message);
    
    if (error.status === 0) {
      console.error('Connection error - check internet connection');
    } else if (error.status === 404) {
      console.error('Not found - check if the breed exists');
    } else if (error.status >= 500) {
      console.error('Server error - Dog API might be down');
    }
    
    return throwError(() => error);
  }
}