interface Cloneable {
    clone(): Veiculo;
}

abstract class Veiculo implements Cloneable {
    constructor(public modelo: string, public marca: string, public cor: string, public numeroRodas: number) {}

    abstract clone(): this;
    abstract represent(): string;
}

class Carro extends Veiculo {
    constructor(modelo: string, marca: string, cor: string, numeroRodas: number, public numeroPortas: number) {
        super(modelo, marca, cor, numeroRodas);
    }

    clone(): this {
        return new Carro(this.modelo, this.marca, this.cor, this.numeroRodas, this.numeroPortas) as this;
    }

    represent(): string {
        return `Carro: ${this.modelo} ${this.marca} ${this.cor} ${this.numeroRodas} rodas ${this.numeroPortas} portas`;
    }
}

class Moto extends Veiculo {
    constructor(modelo: string, marca: string, cor: string, numeroRodas: number, public cilindradas: number) {
        super(modelo, marca, cor, numeroRodas);
    }

    clone(): this {
        return new Moto(this.modelo, this.marca, this.cor, this.numeroRodas, this.cilindradas) as this;
    }

    represent(): string {
        return `Moto: ${this.modelo} ${this.marca} ${this.cor} ${this.numeroRodas} rodas ${this.cilindradas}cc`;
    }
}

class Aplicacao {
    veiculos: Veiculo[] = [];

    constructor() {
        let carro = new Carro('Modelo1', 'Marca1', 'Cor1', 4, 4);
        let moto = new Moto('Modelo2', 'Marca2', 'Cor2', 2, 150);

        this.veiculos.push(carro, carro.clone(), carro.clone(), moto, moto.clone(), moto.clone());
    }

    clonarVeiculos(): Veiculo[] {
        return this.veiculos.map(veiculo => veiculo.clone());
    }

    imprimirVeiculos(): void {
        this.clonarVeiculos().forEach(veiculo => console.log(veiculo.represent()));
    }
}

let app = new Aplicacao();
app.imprimirVeiculos();
