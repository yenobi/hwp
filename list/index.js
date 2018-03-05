class Element {
    constructor(data = null, prev = null, next = null) {
        this.data = data;
        this.prev = prev;
        this.next = next;
    }
}

class List {
    constructor() {
        this.length = 0;
    }

    append(data) {
        const newest = new Element(data);
        if (this.current) this.current.next = newest;
        newest.prev = this.current;
        this.current = newest;
        this.length++;
    }

    prepend(data) {
        for (const element of this) {
            if (element.prev === undefined || element.prev === null) {
                const newest = new Element(data, null, element);
                element.prev = newest;
                this.length++;
            }
        }
    }

    [Symbol.iterator]() {
        let current = this.current;

        return {
            next: () => {
               while(current) {
                   const data = current;
                   current = current.prev;
                   return {
                       done: false,
                       value: data
                   }
               } 

                return {
                    done: true,
                    value: undefined
                }

            }
        }
    }

    insert(index, data) {
        // todo: check if data exist
       this.checkIfIndexIsValid(index);

       if (index === this.length) return this.append(data);
    
       let iteratorIndex = this.length - 1;
       for (const element of this) {
            if (index === iteratorIndex) {
                const current = element;
                const previous = current.prev;

                const newest = new Element(data, previous, current);

                previous.next = newest;
                current.prev = newest;

                this.length++;

                return;
            }
            iteratorIndex--;
        }
    }

    // todo: with count prop
    delete(index, count) {
        this.checkIfIndexIsValid(index);

        if (index === this.length) {
            throw new Error('Too big index');
        }

        let iteratorIndex = this.length - 1;
        for (const element of this) {
            if (index === iteratorIndex) {
                const prev = element.prev;
                const next = element.next;

                prev.next = next;
                next.prev = prev;
                this.length--;
            }
            iteratorIndex--;
        }
    }

    copy() {
        const listCopy = new List();
        for (const element of this) {
            element.next === null ? listCopy.append(element.data) : listCopy.prepend(element.data);
        }
        return listCopy;
    }

    compare(list) {
        if (this.length !== list.length) return false;

        let currentInitial = this.current;
        let currentCompare = list.current;

        // should handle not primitivs ? 
        while(currentInitial.prev) {
            if (currentInitial.data !== currentCompare.data) return false;

            currentInitial = currentInitial.prev; 
            currentCompare = currentCompare.prev;
        }

        return true;
    }

    // private metohd
    checkIfIndexIsValid(index) {
        if(index < 0) {
           throw new Error('Index can not be negative');
        }

        if(index > this.length) {
            throw new Error('Too big index.');
        }
    }
}

// const list = new List();
// list.append('data 1');
// list.append('data 2');
// list.append('data 3');

// const listCopy = list.copy();
// console.log(list.compare(listCopy));
// // console.dir(list.current);
// // list.prepend('prepended');
// // listCopy.current.data = 'corrupted';

// console.dir(list, {depth: 5});
// console.log('---------');
// // listCopy.current.data = 'corrupted';
// console.dir(listCopy, {depth: 5});

// console.log(list == listCopy);
// for (const el of list) {
//     console.dir(el);
// }

