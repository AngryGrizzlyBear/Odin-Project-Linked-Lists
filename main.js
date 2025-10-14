import LinkedList from "./LinkedList.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log("Linked List:", list.toString());

console.log("Size", list.size());

console.log("Head:", list.headNode().value);
console.log("Tail", list.tail().value);

console.log("Node at index 2:", list.at(2).value);

console.log("Contains 'cat'? :", list.contains("cat"));
console.log("Contains 'lion'? :", list.contains("lion"));

console.log("Index of 'snake':", list.find("snake"));
console.log("Index of 'lion':", list.find("lion"));

list.pop();
console.log("After pop():", list.toString());
console.log("New Tail:", list.tail().value);