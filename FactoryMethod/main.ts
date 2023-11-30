interface Computador {
    ram: string;
    hdd: string;
    cpu: string;
    type: string;

    getRAM(): string;
    getHDD(): string;
    getCPU(): string;
    getType(): string;

    toString(): string;
}

class PC implements Computador {
    type = 'PC';

    constructor(public ram: string, public hdd: string, public cpu: string) {}

    getRAM(): string {
        return this.ram;
    }

    getHDD(): string {
        return this.hdd;
    }

    getCPU(): string {
        return this.cpu;
    }

    getType(): string {
        return this.type;
    }

    toString(): string {
        return `RAM = ${this.getRAM()}GB, HDD = ${this.getHDD()}GB, CPU = ${this.getCPU()}GHz, Type = ${this.getType()}`;
    }
}

class Server implements Computador {
    type = 'Server';

    constructor(public ram: string, public hdd: string, public cpu: string) {}

    getRAM(): string {
        return this.ram;
    }

    getHDD(): string {
        return this.hdd;
    }

    getCPU(): string {
        return this.cpu;
    }

    getType(): string {
        return this.type;
    }

    toString(): string {
        return `RAM = ${this.getRAM()}GB, HDD = ${this.getHDD()}GB, CPU = ${this.getCPU()}GHz, Type = ${this.getType()}`;
    }
}

class ComputadorFactory {
    static getComputador(type: string, ram: string, hdd: string, cpu: string): Computador {
        if (type.toLowerCase() === 'pc') {
            return new PC(ram, hdd, cpu);
        }    
        else if (type.toLowerCase() === 'server'){
            return new Server(ram, hdd, cpu);
        }
        throw new Error('Tipo de computador inválido');
    }
}

//Exemplos
let pc = ComputadorFactory.getComputador('PC', '8', '512', '2.9');
console.log(pc.toString());

let server = ComputadorFactory.getComputador('Server', '32', '2048', '3.1');
console.log(server.toString());