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
        
        parentNode.count++;
        
        if (parentNode.last) {
            node.prev = parentNode.last;
            parentNode.last.next = node;
        }
        
        parentNode.last = node;
        
        if (!parentNode.first) {
            parentNode.first = node;
        }
        
        return node;
    }
}

class Node {
    constructor(parent, data) {
        this.data = data;
        this.parent = parent;
        
        this.first = null;
        this.last = null;
        this.prev = null;
        this.next = null;
        this.tree = null;
        this.count = 0;
    }
}
