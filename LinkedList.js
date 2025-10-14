import Node from "./Node.js";

export default class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const newNode = new Node(value);

        if(this.head === null){
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

    size(){
        let count = 0;
        let current = this.head;

        while (current !==null) {
            count++;
            current = current.nextNode;
        }
        return count;
    }

    headNode() {
        return this.head;
    }

    tail(){
        if(this.head === null) return null;

        let current = this.head;
        while(current.nextNode !== null) {
            current = current.nextNode;
        }
        return current;
    }
    at(index){
        if(index < 0) return null;

        let current = this.head;
        let count = 0;

        while (current !== null) {
            if (count === index) return current;
            current = current.nextNode;
            count++;
        }
        return null;
    }
}