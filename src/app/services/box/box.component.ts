import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent {
@Input() Delay:any;
@Input() Título:any;
@Input() Texto:any;
@Input() Icono:any;

constructor(){
   
}
}
