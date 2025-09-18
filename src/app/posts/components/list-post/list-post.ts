import { Component, inject, OnInit } from '@angular/core';
import { Container } from '../../../components/container/container';
import { IPost } from '../../../interfaces/ipost';
import { PostService } from '../../services/post-service';

@Component({
  selector: 'app-list-post',
  imports: [Container],
  templateUrl: './list-post.html',
  styleUrl: './list-post.css'
})
export class ListPost implements OnInit{
  posts:IPost[] = []
  postSrv = inject(PostService)

  ngOnInit(): void {
    this.postSrv.getPosts().subscribe({
      next: (data) => this.posts = data,
      error:(err) => console.error(err)
    })
  }
}
