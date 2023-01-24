// class ListNode {
//     val;
//     next;

//     constructor(val , next = null){
//         this.val =val;
//         this.next = next;
//     }
// }
// class TestClass {
//     head;

//     constructor(head = null){
//         this.head =head;
//     }

//     hasLast() {
//         return this.head !== null;

//     }
//     getLast(){
//         if (!this.hasLast()){
//             return null;
//         }
//         let current = this.head;
//         while (current.next !== null)
//         current = current.next;
//     }
//     let finalValue = current.val;
//     while (current.next.next !==null){
//         current.next.next = null;
//         return finalValue;
//     }
// }

//###########################################################################
//promise is a class in js
//constructor (function)

let promise = new Promise((fulfilled, notFulfilled => {
    let num1 = 10;
    let num2 = 20;
    let sum = num1 + num2;
    if (sum > 10) {
        fulfilled(sum);
    } else {
        notFulfilled(new Error("Promisr not fulfilled"));
    }
}));