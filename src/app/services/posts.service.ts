import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  arrPost: Post[];

  constructor() {

    this.arrPost = [
      {
        title: 'En un lugar de la mancha', body: 'Hola que tal soy el chico de las poesias, tu fiel admirador', author: 'Juan Ramon Jimenez', category: 'drama', createAt: new Date,
      },

      {
        title: 'La vida misma', body: 'La vida misma es la misma vida y si no es la misma que la misma de tu amigo o vecino, no seguira siendo la misma para su persona pero si para el resto de vidas que la vida no se que mas la verda. La vida', author: 'Matusalen', category: 'terror', createAt: new Date,
      },
      {
        title: 'Pepe Botella', body: 'El hermano de Napoleon se llamaba Jose y al conquistar Cadiz el tio se emborrachaba todos los dias y estaba sienpre con una tajá considerable. Los lugareños le bautizaron con un nuevo nombre: Pepe Botella', author: 'Jhosep Bottle', category: 'comedia', createAt: new Date,
      }
    ];
  }

  getAll(): Post[] {
    return this.arrPost;
  }

  create(pPost: Post) {
    this.arrPost.push(pPost);
  }

  getByCategoria(pCategoria: string) {
    const result = []
    for (let post of this.arrPost) {
      if (post.category.toLowerCase() === pCategoria.toLowerCase()) {
        result.push(post)
      }
    }
    return result
  }



}
