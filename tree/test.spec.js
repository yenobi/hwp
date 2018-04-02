describe('basic parts of lab - tree and node class', () => {
    it('should init empty node', () => {
        const node = new Node();
        expect(node).toBeTruthy();
        expect(node.count).toBe(0);
        expect(node.parent).toBeFalsy();
        expect(node.data).toBeFalsy();
    });
    
    it('should init node with data but without parent', () => {
        const node = new Node(null, 'data');
        expect(node.parent).toBeFalsy();
        expect(node.data).toBe('data');
    });
    
    it('should init node with data but without parent', () => {
        const node = new Node('parent', 'data');
        expect(node instanceof Node).toBeTruthy();
        expect(node.parent).toBe('parent');
        expect(node.data).toBe('data');
    });

    it('should init tree without data', () => {
        const tree = new Tree();
        expect(tree.root instanceof Node).toBeTruthy();
        expect(tree.count).toBe(1);
        expect(tree.root).toBeTruthy();
        expect(tree.root.tree).toBe(tree);
    });
    
    it('should init tree with data', () => {
        const tree = new Tree('data');
        expect(tree.count).toBe(1);
        expect(tree.root).toBeTruthy();
        expect(tree.root.tree).toBe(tree);
        expect(tree.root.data).toBe('data');
    });    
});

describe('simple tree with one root and three on line nodes', () => {
    it('should create tree with root and 3 siblings', () => {
        const tree = new Tree({name: 'root'});
        const n1 = tree.add({name: 'n1'});
        const n2 = tree.add({name: 'n2'});
        const n3 = tree.add({name: 'n3'});
        
        expect(tree.count).toBe(4);
        const root = tree.root;
        expect(root.first).toBe(n1);
        expect(root.last).toBe(n3);
        expect(n1.next).toBe(n2);
        expect(n3.prev).toBe(n2);
    });
});
