class Tree {
    constructor(data) {
        this.count = 1;
        this.root = new Node(null, data);
        this.root.tree = this;
    }

    // can pass node to add new node from some other branch
    add(data, parentNode = this.root) {
        this.count++;
        
        const node = new Node(parentNode, data)
        node.tree = this;
        
        parentNode.first = node;
        parentNode.last = node;
        parentNode.count++;
    }
}

class Node {
    constructor(parent, data) {
        this.data = data;
        this.parent = parent;
        
        this.fist = null;
        this.last = null;
        this.prev = null;
        this.next = null;
        this.tree = null;
        
        // how to increase counter when adding child nodes ?
        this.count = 0;
    }
}

const tree = new Tree({name: 'root'});
tree.add({name: 'n1'});

console.dir(tree, {depth: null});

// const n1 = new Node(null, 'n1');

// const n2 = new Node(n1, 'n2');
// const n3 = new Node(n1, 'n3');
// const n4 = new Node(n1, 'n4');

// console.dir(n2);


// const st = new Node(n2, 'st1');
// const st2 = new Node(st, 'st2');
// const st3 = new Node(st, 'st3');
// const st4 = new Node(st, 'st4');
// const st5 = new Node(st, 'st5');
// const st6 = new Node(st, 'st6');

// console.dir(st2, {deps: 5})
// console.dir(st2.parent);
