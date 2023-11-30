// Definindo as interfaces Pato e Galinha
interface Pato {
    grasnar(): void;
    voar(): void;
}

interface Galinha {
    cacarejar(): void;
    voar(): void;
}

// Implementando a classe Pato
class PatoReal implements Pato {
    grasnar() {
        console.log("Quack!");
    }
    voar() {
        console.log("O pato está voando");
    }
}

// Implementando a classe AdaptadorPato
class AdaptadorPato implements Galinha {
    pato: Pato;
    constructor(pato: Pato) {
        this.pato = pato;
    }
    cacarejar() {
        this.pato.grasnar();
    }
    voar() {
        this.pato.voar();
    }
}

// Demonstrando o uso da classe AdaptadorPato
class AdaptadorPatoDemo {
    static main() {
        let pato: Pato = new PatoReal();
        let galinha: Galinha = new AdaptadorPato(pato);
        galinha.cacarejar();
        galinha.voar();
    }
}

// Executando a demonstração
AdaptadorPatoDemo.main();
