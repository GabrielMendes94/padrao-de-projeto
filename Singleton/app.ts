class SistemaSeguranca {
    private static instancia: SistemaSeguranca;
    private senhaSecreta: string;

    private constructor() {
        this.senhaSecreta = 'senha123'; // Defina a senha da Base Secreta aqui
    }

    public static getInstancia(): SistemaSeguranca {
        if (!SistemaSeguranca.instancia) {
            SistemaSeguranca.instancia = new SistemaSeguranca();
        }
        return SistemaSeguranca.instancia;
    }

    public acessarBaseSecreta(senhaInserida: string): string {
        if (this.senhaSecreta === senhaInserida) {
            return 'Acesso concedido';
        } else {
            return 'Acesso negado';
        }
    }
}

// Programa principal
const sistema = SistemaSeguranca.getInstancia();
console.log(sistema.acessarBaseSecreta('senha123')); // Acesso concedido
console.log(sistema.acessarBaseSecreta('senhaErrada')); // Acesso negado
