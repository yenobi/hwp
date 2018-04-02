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
