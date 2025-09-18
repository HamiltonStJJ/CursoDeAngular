import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from '../../interfaces/ipost';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl='https://jsonplaceholder.typicode.com/posts'
  http = inject(HttpClient)

  getPosts():Observable<IPost[]>  {
    return this.http.get<IPost[]>(this.apiUrl)
}
}