import { Component } from '@angular/core';
import { JsonplaceholderService } from '../apiServices/jsonplaceholder.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-one-post',
  templateUrl: './one-post.component.html',
  styleUrls: ['./one-post.component.css']
})
export class OnePostComponent {
  post:any;
  comments:any;

  constructor (private jsonplaceholderService: JsonplaceholderService,
               private ruta: ActivatedRoute){ }

  ngOnInit(): void{
    let id = this.ruta.snapshot.params['id'];
    
    this.jsonplaceholderService.onePost(id).subscribe(data =>{
    this.post =data;
    });

    this.jsonplaceholderService.commentsPost(id).subscribe(data =>{
      this.comments =data;
      });

  }
}
