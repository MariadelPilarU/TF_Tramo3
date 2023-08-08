import { Component } from '@angular/core';
import { JsonplaceholderService } from '../apiServices/jsonplaceholder.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-one-post',
  templateUrl: './one-post.component.html',
  styleUrls: ['./one-post.component.css']
})
export class OnePostComponent {
  public post:any;
  public comments:any;

  constructor (private jsonplaceholderService: JsonplaceholderService, private ruta: ActivatedRoute){ 
   
    this.ruta.paramMap.subscribe((params: ParamMap)=> {
      this.onePost(params.get('id'));
    });
}

  onePost(id: any) {
    this.jsonplaceholderService.onePost(id).subscribe(data =>{
      this.post = data;
    });

    this.jsonplaceholderService.commentsPost(id).subscribe(data =>{
      this.comments =data;
      });
    }
  } 