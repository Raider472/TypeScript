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
