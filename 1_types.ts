const isFetching: boolean = false
const int: number = 0
const msg: string = 'a'

const numberArr: number[] = [1, 2, 3, 4, 5]
const numberArray2: Array<number> = [1, 2, 3, 4, 5]

const words: string[] = ['Hei', 'Hei', 'Hei', 'Hei', 'Hei']

// Tuple
const contact: [string, number] = ['Zens', 12345]

// Any
let variable: any = 'New String'
variable = 12121212
variable = []

// =======

function sayMyName(name: string): void {
    console.log(name)
}

function returnMyName(name: string): string {
    return name
}

// Never
function throwError(message: string): never {
    throw new Error(message)
}

function infinite(): never {
    while (true) {

    }
}

// Type
type Login = string
const login: Login = 'admin'

type ID = string | number
const id1: ID = 'aaa'
const id2: ID = 111

type SomeType = string | null | undefined


























///