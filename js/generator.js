// function* - '*' - означает - генератор
function* generator() {
    for (let i = 1; i <= 5; i++) {
        yield i
    }
    // yield 1
    // yield 2
    // yield 3
    // yield 4
    // yield 5
}

let numbers = generator()

console.log(numbers.next())
console.log(numbers.next().done)
console.log(numbers.next().value)
console.log(numbers.next())
console.log(numbers.next())

let obj = {
    generator() {
        let i = 0
        return {
            next() {
                return{value: ++i, done: false}
            }
        }

    }
}

let gen = obj.generator()