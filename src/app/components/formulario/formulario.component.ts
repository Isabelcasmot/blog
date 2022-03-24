import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;

  constructor(private postService: PostsService,
    private router: Router) {
    this.formulario = new FormGroup({

      title: new FormControl(),
      body: new FormControl(),
      author: new FormControl(),
      category: new FormControl(),
      createAt: new FormControl(),

    })

  }

  ngOnInit(): void {
  }

  onSubmit() {
    const fechaCreacion = new Date(this.formulario.value.createAt)

    this.formulario.value.createAt = fechaCreacion;
    console.log(typeof this.formulario.value.createAt)

    this.postService.create(this.formulario.value);

    this.router.navigate(['/post']);

    this.formulario.reset();

  }





}
