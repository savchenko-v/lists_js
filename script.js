class LinkedListNode  {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }

    toString() {
        return `${this.value}`;  // возвращает приведённый к строке текущий элемент
    }
}

class LinkedList  {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const newNode  = new LinkedListNode(value);  // создаём новый узел

        if (!this.head || !this.tail) {  // если нет head или tail, то устанавливаем их
            this.head = newNode;
            this.tail = newNode;

            return this;
        }

        this.tail.next = newNode;
        this.tail = newNode;
        return this;
    }
}

const list = new LinkedList();
list.append('a').append('b').append('c');
console.log(list);