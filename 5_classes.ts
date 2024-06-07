class Typescript {
    version: string

    constructor(version: string) {
        this.version = version
    }

    info(name: string): string {
        return `${name}: ${this.version}`
    }

}

class Car {
    readonly model: string
    readonly numberOfWheels: number = 4

    constructor(theModel: string) {
        this.model = theModel
    }
}

// короткая запись в конструктор, TS создаст под капотом this.field = field
class Short {
    constructor(readonly field: string) {

    }
}

// Модификаторы
class Animal {

    // доступно только в базовом классе
    // через экземпляр получить доступ не можем
    private go() {
        console.log('go')
    }

    // доступно для методов базового класса и всех наследников
    // через экземпляр получить доступ не можем
    protected voice: string = ''

    // доступно в экземплярах базового класса и наследниках
    public color: string = 'black'

}

const animal = new Animal()

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice
    }
}

const cat = new Cat()

abstract class Component {
    abstract render(): void
    abstract info(): string
}

class appComponent extends Component {
    render(): void {
        console.log('render')
    }
    info(): string {
        return 'str'
    }
}




















//