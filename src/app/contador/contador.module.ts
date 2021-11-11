import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador/contador.component';


//Este es un decorador: 

@NgModule({
    //aqui declaramos los componentes a usar. Este es un nucleo de contenido invisible a menos que se exporte abajo. Todos estoselementos son arrays. 

    declarations: [
       ContadorComponent
    ],
    exports: [
        ContadorComponent
    ],

    //aquí van solo modulos
    imports: [
        
    ]
})


export class ContadorModule {}