import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-lista-post',
  templateUrl: './lista-post.component.html',
  styleUrls: ['./lista-post.component.css']
})
export class ListaPostComponent implements OnInit {

  arrPost: Post[];

  constructor(private postServices: PostsService) {

    this.arrPost = []
  }

  ngOnInit(): void {
    this.arrPost = this.postServices.getAll();

  }

  onChange($event: any) {
    this.arrPost = this.postServices.getByCategoria($event.target.value)

  }
}
