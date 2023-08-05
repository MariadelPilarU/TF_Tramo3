import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent {
@Input() delay: string ='';
@Input() titulo: string ='';
@Input() texto: string ='';
@Input() icono: string ='';

constructor(){
   console.log(this.titulo, this.texto)
}


}
