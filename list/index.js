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
// list.insert(1, 's');

// console.dir(list, {depth: 5});

// for (const el of list) {
//     console.dir(el);
// }