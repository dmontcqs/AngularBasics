import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


//Este es un decorador: 

@NgModule({
    //aqui declaramos los componentes a usar. Este es un nucleo de contenido invisible a menos que se exporte abajo. Todos estoselementos son arrays. 

    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    exports: [
        ListadoComponent
    ],
    //aquí van solo modulos
    imports: [
        /*para usar directivas personalizadas como ngFor o ngIf */
        CommonModule
    ]
})


export class HeroesModule {}