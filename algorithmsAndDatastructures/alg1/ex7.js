class LLNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }

}

class LinkedList {
    #head;
    constructor(value = null) {
        this.#head = value ? new LLNode(value) : null;
    }

    append(val) {
        if(!this.#head) {
            this.#head = new LLNode(val);
        }
        else {
            let node = this.#head;
            while(node.next) {
                node = node.next;
            }
            node.next = new LLNode(val);
        }
    }
    
    removeDuplicates() {
        const exist = new Set();
        let node = this.#head;
        exist.add(node.val);
        while(node.next) {
            const val = node.next.val;
            if(exist.has(node.next.val)) {
                node.next = node.next.next;
            }
            else {
                node = node.next;
            }
            exist.add(val);
        }
    }

    print() {
        let node = this.#head;
        const nodes = [];
        while(node) {
            nodes.push(node.val);
            node = node.next;
        }
        console.log(...nodes);
    }
}

const ll = new LinkedList();
ll.print();
ll.append(1);
ll.append(7);
ll.append(1);
ll.append(7);
ll.append(1);
ll.append(1);
ll.print();
ll.removeDuplicates();
ll.print();
ll.append(8);
ll.append(15);
ll.append(15);
ll.append(15);
ll.print();
ll.removeDuplicates();
ll.print();
