class ListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }

    toString() {
        return `${this.value}`;  // возвращает приведённый к строке текущий элемент
    }

    append(value) {
        const newNode  = new ListNode(value);  // создаём новый узел
        this.next = newNode;
        return this;
    }

    length() {  // возвращает длину класса
        var counter = 0;
        var current = this.next;
        while (this.next != null) {
            console.log(current);
            console.log(this.next);
            counter++;
        }
        return counter;
    }
}

function len() {
    const list1 = new ListNode();
    list1.append('a').append('b').append('c');
    // for (var i = 0; i < )
    console.log(list1);
    console.log(list1.length());
}

console.log(ListNode.length);

// console.log(len);

// const list1 = new ListNode();
// list1.append('a').append('b').append('c');
// // for (var i = 0; i < )
// console.log(list1);
// console.log(list1.length());
// console.log(Object.key(list1).length);