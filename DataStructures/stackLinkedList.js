const getRandomInt = require("./helpers/getRandomInt")

// A LIFO single Linked List (Stack)

class Node {
    constructor(element, next = null) {
        this.element = element
        this.next = null
    }

    getNext = () => {
        return this.next;
    }
}

class StackLinkedList {
    constructor() {
        this.head = null
    }

    isEmpty = () => {
        if (!this.head) {
            return true
        } else {
            return false
        }
    }

    push = (element) => {
        let n = new Node(element)
        let current = this.head
        n.next = current
        this.head = n
    }

    pop = (element) => {
        let current = this.head

        if(current) {
            let el = current.element
            current = current.next
            this.head = current
            return el
        }

        return null
    }

    peek = () => {
        if(this.head) {
            return this.head.element
        }
        return null
    }
    
    removeAllElements = () => {
        this.head = null
    }
    
    printStack = () => {
        let temp = this.head
        while (temp) {
            console.log(temp.element)
            temp = temp.getNext()
        }
    }

    getSize = () => {
        let c = 0
        let current = this.head
        while(current) {
            c++
            current = current.next
        }
        return c
    }
}

let l = new StackLinkedList()

console.log(l.isEmpty())
for (let i = 0; i < 10; i++) {
    l.push(getRandomInt.getRandomInt(0, 100))
}
l.printStack()
console.log("List size = ", l.getSize())
console.log(l.isEmpty())
l.pop()
l.pop()
console.log("List size = ", l.getSize())
l.printStack()
console.log("Peek: ", l.peek())
l.printStack()
l.removeAllElements()
console.log("---------------------")
l.printStack()
console.log("List size = ", l.getSize())
