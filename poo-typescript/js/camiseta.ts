// Interface
interface CamisetaBase {
    setColor(color: string);

    getColor(): string;
}

// Decorador
function estampar(logo: string) {
    return function(target: Function) {
        target.prototype.estampacion = function(): void {
            console.log("Camiseta Estampada con logo de " + logo);
        }
    };
} 
 
// Clase (plantilla objeto)
@estampar("Gucci Gang")
class Camiseta implements CamisetaBase {
    // Propiedades (caracteristicas objeto)
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;

    // Metodos (funciones o acciones objeto)
    constructor(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }

    public setColor(color) {
        this.color = color;
    }

    public getColor() {
        return this.color;
    }
}

// Clase hija
class Sudadera extends Camiseta {
    private capucha: boolean;

    constructor(color, modelo, marca, talla, precio, capucha) {
        super(color, modelo, marca, talla, precio);
        this.capucha = capucha;
    }

    public setCapucha(capucha: boolean) {
        this.capucha = capucha;
    }

    public getCapucha() : boolean {
        return this.capucha;
    }
}

var camiseta = new Camiseta("Azul", "Manga Larga", "Nike", "L", 10);
console.log(camiseta);

var sud: Camiseta = new Sudadera("Azul", "Manga Larga", "Nike", "L", 10, true);
console.log(sud);