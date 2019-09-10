import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core'

@Component({
    selector: "videojuego",
    templateUrl: "./videojuego.component.html"
})
export class VideoJuegoComponent implements OnInit, DoCheck, OnDestroy {
    
    public titulo: string;
    public listado: string;

    constructor() {
        // console.log("Se ha cargado el componente videojuego.component.ts")

        this.titulo = "Lorem ipsum Video Juego";
        this.listado = "Listado juegos más populares";
    }

    ngOnInit(): void {
        // console.log("OnInit ejecutado");
    }

    ngDoCheck(): void {
        // console.log("DoCheck ejecutado");
    }

    ngOnDestroy(): void {
        // console.log("OnDestoy ejecutado");
    }
    

    cambiarTitulo(): void {
        this.titulo = "Nuevo titulo componente";
    }
}