describe('one way linked lists', () => {
    it('check creation of element', () => {
        const el = new Element('data');
        expect(el.data).toBe('data');
        expect(el.prev).toBeFalsy();
        expect(el.next).toBeFalsy();
    });

    it('add 3 items to list', () => {
        const list = new List();
        list.append('data 1');
        list.append('data 2');
        list.append('data 3');

        const {current} = list;
        expect(current.data).toBe('data 3');
        expect(current.prev.data).toBe('data 2');
        expect(current.prev.prev.data).toBe('data 1');
    });
});

describe('two way binding linked list', () => {
    it('add 2 items', () => {
        const list = new List();
        list.append('data 1');
        list.append('data 2');
        list.append('data 3');

        const {prev} = list.current;
        expect(prev instanceof Element).toBeTruthy();
        expect(prev.data).toBe('data 2');
        expect(prev.next.data).toBe('data 3');
        expect(prev.prev.data).toBe('data 1');
    });
});
