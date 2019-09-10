import { Injectable } from '@angular/core'
import { Zapatilla } from '../models/zapatilla'

@Injectable()
export class ZapatillaService {
    public zapatillas: Array<Zapatilla>;

    constructor() {
        this.zapatillas = [
            new Zapatilla("Nike Airmax", "Nike", "Rojas", 190, true),
            new Zapatilla("Reebook Classic", "Reebook", "Blancas", 80, true),
            new Zapatilla("Nike Runner", "Nike", "Negras", 60, true),
            new Zapatilla("Adidas Yezzy", "Adidas", "Gris", 180, false),
            new Zapatilla("Reebook Spartan", "Reebook", "Gris", 50, false)
        ]
    }

    getTexto() {
        return "Lorem Ipsum Service";
    }

    getZapatillas(): Array<Zapatilla> {
        return this.zapatillas;
    }
}