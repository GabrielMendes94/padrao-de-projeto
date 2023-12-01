import * as readline from 'readline';

interface Observer {
    update(event: string, data: any): void;
}

class Editor {
    observers: Observer[] = [];

    subscribe(observer: Observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer: Observer) {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex > -1) {
            this.observers.splice(observerIndex, 1);
        }
    }

    notify(event: string, data: any) {
        for (let observer of this.observers) {
            observer.update(event, data);
        }
    }
}

class TextEditor extends Editor {
    lines: string[] = [];

    insertLine(lineNumber: number, text: string) {
        this.lines.splice(lineNumber, 0, text);
        this.notify('insertLine', { lineNumber, text });
    }

    removeLine(lineNumber: number) {
        const text = this.lines.splice(lineNumber, 1)[0];
        this.notify('removeLine', { lineNumber, text });
    }

    save() {
        this.notify('save', this.lines.join('\n'));
    }
}

class TextFile implements Observer {
    content: string = '';

    update(event: string, data: any) {
        if (event === 'insertLine') {
            this.content += `\nInserted "${data.text}" at line ${data.lineNumber}`;
        } else if (event === 'removeLine') {
            this.content += `\nRemoved line ${data.lineNumber}: "${data.text}"`;
        } else if (event === 'save') {
            this.content = data;
            console.log(this.content);
        }
    }
}

let textEditor = new TextEditor();
let textFile = new TextFile();

textEditor.subscribe(textFile);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lineNumber = 0;

rl.on('line', (input) => {
    if (input === 'EOF') {
        textEditor.save();
        rl.close();
    } else {
        textEditor.insertLine(lineNumber++, input);
    }
});
