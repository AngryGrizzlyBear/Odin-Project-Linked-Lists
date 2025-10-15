import Node from "./Node.js";

export default class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const newNode = new Node(value);

        if (this.head === null) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.nextNode !== null) {
            current = current.nextNode;
        }
        current.nextNode = newNode;
    }

    prepend(value) {
        const newNode = new Node(value, this.head);
        this.head = newNode;
    }

    size() {
        let count = 0;
        let current = this.head;

        while (current !== null) {
            count++;
            current = current.nextNode;
        }
        return count;
    }

    headNode() {
        return this.head;
    }

    tail() {
        if (this.head === null) return null;

        let current = this.head;
        while (current.nextNode !== null) {
            current = current.nextNode;
        }
        return current;
    }
    at(index) {
        if (index < 0) return null;

        let current = this.head;
        let count = 0;

        while (current !== null) {
            if (count === index) return current;
            current = current.nextNode;
            count++;
        }
        return null;
    }
    pop() {
        if (!this.head) return;

        if (!this.head.nextNode) {
            this.head = null;
            return;
        }

        let current = this.head;
        while (current.nextNode.nextNode !== null) {
            current = current.nextNode;
        }
        current.nextNode = null;
    }
    contains(value) {
        let current = this.head;

        while (current !== null) {
            if (current.value === value) return true;
            current = current.nextNode;
        }

        return false;
    }
    find(value) {
        let current = this.head;
        let index = 0;

        while (current !== null) {
            if (current.value === value) return index;
            current = current.nextNode;
            index++;
        }

        return null;
    }

    toString() {
        let str = "";
        let current = this.head;

        while (current !== null) {
            str += `( ${current.value} ) ->`;
            current = current.nextNode;
        }

        str += "null";
        return str;
    }

    insertAt(value, index) {
        if (index < 0) return;
        
        if(index === 0){
            this.prepend(value);
            return;
        }

        let current = this.head;
        let count = 0;

        while (current !== null && count < index - 1) {
            current = current.nextNode;
            count++;
        }

        if (current === null) return;

        const newNode = new Node(value, current.nextNode);
        current.nextNode = newNode;
    }
    removeAt(index){
        if(index < 0 || this.head === null) return;

        if (index === 0) {
            this.head = this.head.nextNode;
            return;
        }
        
        let current = this.head;
        let count = 0;

        while (current !== null && count < index - 1) {
            current = current.nextNode;
            count ++
        }

        if (current === null || current.nextNode === null) return;

        current.nextNode = current.nextNode.nextNode;
    }
}
