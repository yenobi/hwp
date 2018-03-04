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

describe('length of list', () => {
    let list;
    beforeEach(() => {
        list = new List();
    });

    it('default length 0', () => {
        expect(list.length).toBe(0);
    });

    it('length 1', () => {
        list.append('data 1');
        expect(list.length).toBe(1);
    });

    it('length 3', () => {
        list.append('data 1');
        list.append('data 2');
        list.append('data 3');
        expect(list.length).toBe(3);
    });
});

describe('iterator protocol', () => {
    let list;

    beforeEach(() => {
        list = new List();
    });

    it('should have [Symbol iterator]', () => {
        // const list = new List();
        const iterator = list[Symbol.iterator]();
        expect(iterator).toBeTruthy();
    });

    it('manual invoking of iterator', () => {
        // const list = new List();
        list.append('data 1');
        list.append('data 2');
        list.append('data 3');

        const listIterator = list[Symbol.iterator]();
        const firstIteration = listIterator.next();
        listIterator.next();
        listIterator.next();
        const lastIteration = listIterator.next();

        expect(firstIteration.done).toBeFalsy();
        expect(firstIteration.value.data).toBe('data 3');
        
        expect(lastIteration.done).toBeTruthy();
        expect(lastIteration.value).toBe(undefined);

    });

    it('for of operator', () => {
        // const list = new List();
        list.append('data 1');
        list.append('data 2');
        list.append('data 3');
        const result = [];
        for (const element of list) {
            result.push(element);
        }
        expect(result.length).toBe(3);
        expect(result[0].data).toBe('data 3');
        expect(result[2].data).toBe('data 1');
    })
});

describe('insert method', () => {
    let list;

    beforeEach(() => {
        list = new List();
        list.append('data 1');
        list.append('data 2');
        list.append('data 3');
    });

    it('error if index < 0', () => {
        expect(() => (list.insert(-1, 'error data'))).toThrow(new Error('Index can not be negative'));
    });

    it('error if index > list.length', () => {
        expect(() => (list.insert(11, 'error data'))).toThrow(new Error('Too big index.'));
    });

    if('success inserting element', () => {
        list.insert(1, 'inserted data');
        for(const element of list) {
            if(element.data === 'data 2') {
                expect(element.prev.data).toBe('inserted data');
            } else if(element.data === 'inserted data') {
                expect(element.prev.data).toBe('data 1');
                expect(element.next.data).toBe('data 2');
            } else if(element.data === 'data 1') {
                expect(element.next.data).toBe('inserted data');
            }
        }
    });
})