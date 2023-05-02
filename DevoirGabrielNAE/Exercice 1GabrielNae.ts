function gain( mise: number, r1: number, r2: number, r3: number) : void {
    if (r1 === 1 || r2 === 1 || r3 === 1) {
        if ((r1 === 1 && r2 === 1) || (r1 === 1 && r3 === 1) || (r2 === 1 && r3 === 1)) {
            if (r1 === 1 && r2 === 1 && r3 === 1) {
                mise = mise * 250
            }
            else {
                mise = mise * 5
            }
        }
        else {
            mise = mise * 2
        }
    }
    if (r1 === 2 && r2 === 2 && r3 === 2) {
        mise = mise * 150
    }
    console.log(mise, r1, r2, r3)
}

gain(10, 2, 2, 2)