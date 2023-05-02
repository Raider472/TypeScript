//Ex1
export class Triple<T, U, I> {
    private _first: T
    private _second: U
    private _third: I

    constructor(first: T, second: U, third: I) {
        this._first = first
        this._second = second
        this._third = third
    }

    get first(): T {
        return this._first
    }

    get second(): U {
        return this._second
    }

    get third(): I {
        return this._third
    }
}

const yepa = new Triple<string, number, boolean>("Halo", 58, true)
const Yopo = new Triple<number, number, number>(58,59,60)
const yolo = new Triple<string,string,string>("Jean", "ValJean", "Yep")

console.log(yolo.first)
console.log(yolo.second)
console.log(yolo.third)

//Ex2
export interface Istack<T> {
    push(objet: T): void
    pop(): void
    peek(): T
    isEmpty(): boolean
    size(): number
}

export class Stack implements Istack<string> {
    private _stack: Array<string> = []

    push(objet: string): void {
        this._stack.push(objet)
    }

    pop(): void {
        this._stack.pop()
    }

    peek(): string {
        return this._stack[this.size() - 1]
    }

    isEmpty(): boolean {
        if (this.size() === 0) {
            return true
        }
        else {
            return false
        }
    }

    size(): number {
        return this._stack.length
    }
}

let TestInter = new Stack()
TestInter.push("yepfhifdj")
console.log(TestInter.peek())
console.log(TestInter.size())
console.log(TestInter.isEmpty())
TestInter.pop()
console.log(TestInter.isEmpty())