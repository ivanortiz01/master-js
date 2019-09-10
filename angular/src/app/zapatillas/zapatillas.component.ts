import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla'
import { ZapatillaService } from '../service/zapatilla.service';

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html',
    providers: [ZapatillaService]
})
export class ZapatillasComponent implements OnInit {

    public titulo: string = "Componente de Zapatillas";
    public zapatillas: Array<Zapatilla>;
    public marcas: string[];
    public color: string;
    public mi_marca: string;

    constructor(
        private _zapatillaService: ZapatillaService
    ) {
        this.mi_marca = "Fila"
        this.color = 'blue';
        this.marcas = new Array();
    }

    ngOnInit(): void {
        this.zapatillas = this._zapatillaService.getZapatillas();

        // alert(this._zapatillaService.getTexto());

        console.log(this.zapatillas);

        this.obtenerMarcas();
    }

    obtenerMarcas() {
        this.zapatillas.forEach((value, index) => {
            if (this.marcas.indexOf(value.marca) < 0) {
                this.adicionarMarca(value.marca)
            }
        });

        console.log(this.marcas);
    }

    getMarca() {
        alert(this.mi_marca);
    }

    addMarca() {
        this.adicionarMarca(this.mi_marca)
    }

    borrarMarca(indice) {
        this.marcas.splice(indice, 1);
    }

    onBlur() {
        console.log("Ha salido del input");
    }

    onEnter() {
        this.getMarca();
    }

    private adicionarMarca(marca) {
        if (this.marcas.indexOf(marca) < 0) {
            this.marcas.push(marca);
        }
    }
}
