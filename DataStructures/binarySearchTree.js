const getRandomInt = require("./helpers/getRandomInt")
// Binary Search Tree

class Node {
    constructor(element) {
        this.element = element
        this.left = null
        this.right = null
    }
}

class BinarySeachTree {
    constructor() {
        this.root = null
    }

    insert(element) {
        var newNode = new Node(element);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }

        let current = this.root;
        while (current) {
            if (element === current.element) return undefined;
            if (element < current.element) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    find(element) {
        if (!this.root) return false

        let current = this.root
        let found = false
        while (current && !found) {
            if (element < current.element) {
                current = current.left
            } else if (element > current.element) {
                current = current.right
            } else {
                found = current
            }

        }

        if (!found) return "NOT FOUND";
        return found
    }

    inorder(node = this.root) {
        if (node !== null) {
            this.inorder(node.left);
            console.log(node.element);
            this.inorder(node.right);
        }
    }

    count(node = this.root) {
        let c = 1; // Count node itself
        if (node === null)
            return 0;
        else {
            c += this.count(node.left);
            c += this.count(node.right);
            return c;
        }
    }
}

let tree = new BinarySeachTree()
for (let i = 0; i < 10; i++) {
    tree.insert(getRandomInt.getRandomInt(0, 100))
}
tree.inorder()
console.log(tree.find(50))
console.log("------------------------------")
for (let i = 0; i < 10; i++) {
    tree.insert(getRandomInt.getRandomInt(0, 100))
}
tree.inorder()
console.log("COUNT: ", tree.count())
