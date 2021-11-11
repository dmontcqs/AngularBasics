import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
 
})
export class ListadoComponent  {

  //para mostrar cualquier contenido en html se tiene que declarar aquí: 

heroes: string[] = ["Cedric", "McNulty", "Bunk", "Freamon", "Herc"];
heroeBorrado: any = ""; 

borrarHeroe(){
  this.heroeBorrado =  
  this.heroes.shift(); 

}

}

