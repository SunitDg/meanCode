import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  newPost = '';
  constructor() { }

  ngOnInit(): void {
  }

  onAddPost(text){ 
    console.log(text.value)
    this.newPost = text.value
  }

}
