const getRandomInt = require("./helpers/getRandomInt")

// A LIFO single Linked List

class Node {
    constructor(element, next = null) {
        this.element = element
        this.next = null
    }

    getNext = () => {
        return this.next;
    }
}

class LinkedList {
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

    addElement = (element) => { // Add element at the beginning
        let n = new Node(element)

        n.next = this.head
        this.head = n
    }

    removeElement = () => { // Remove last element
        if (!this.head) {
            return null;
        }

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let current = this.head;
        let tail = this.head.next;

        while (tail.next !== null) {
            current = tail;
            tail = tail.next;
        }
        current.next = null;
    }

    removeAllElements = () => {
        this.head = null
    }

    printList = () => {
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

let l = new LinkedList()

console.log(l.isEmpty())
for (let i = 0; i < 10; i++) {
    l.addElement(getRandomInt.getRandomInt(0, 100))
}
l.printList()
console.log("List size = ", l.getSize())
console.log(l.isEmpty())
l.removeElement()
l.removeElement()
console.log("List size = ", l.getSize())
l.printList()
l.removeAllElements()
console.log("---------------------")
l.printList()
console.log("List size = ", l.getSize())
