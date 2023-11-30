// Interface para o sanduíche
interface Sanduiche {
    getDescricao(): string;
    getCusto(): number;
}

// Classe para o sanduíche de frango assado
class FrangoAssado implements Sanduiche {
    getDescricao(): string {
        return 'Sanduíche de Frango Assado';
    }

    getCusto(): number {
        return 4.50;
    }
}

// Classe abstrata para os ingredientes adicionais (Decorator)
abstract class IngredienteDecorator implements Sanduiche {
    protected sanduiche: Sanduiche;
    protected ingredientes: Map<string, number>;

    constructor(sanduiche: Sanduiche) {
        this.sanduiche = sanduiche;
        this.ingredientes = new Map<string, number>();
    }

    getDescricao(): string {
        let descricao = this.sanduiche.getDescricao();
        this.ingredientes.forEach((valor, chave) => {
            descricao += ', ' + chave;
        });
        return descricao;
    }

    getCusto(): number {
        let custo = this.sanduiche.getCusto();
        this.ingredientes.forEach((valor, chave) => {
            custo += valor;
        });
        return custo;
    }
}

// Classe para o pepperoni
class Pepperoni extends IngredienteDecorator {
    constructor(sanduiche: Sanduiche) {
        super(sanduiche);
        this.ingredientes.set('Pepperoni', 0.99);
    }
}

// Classe para o queijo mussarela ralado
class QueijoMussarelaRalado extends IngredienteDecorator {
    constructor(sanduiche: Sanduiche) {
        super(sanduiche);
        this.ingredientes.set('Queijo Mussarela Ralado', 2.00);
    }
}

// Imprimir no console
let meuSanduiche: Sanduiche = new FrangoAssado();
meuSanduiche = new Pepperoni(meuSanduiche);
meuSanduiche = new QueijoMussarelaRalado(meuSanduiche);

console.log(`${meuSanduiche.getDescricao()}. Custa $${meuSanduiche.getCusto().toFixed(2)}`);
