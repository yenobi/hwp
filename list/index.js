class Element {
    constructor(data) {
        this.data = data || null; 
        this.prev = null;
        this.next = null;
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
        if(index < 0) {
           throw new Error('Index can not be negative');
        }

        if(index > this.length) {
            throw new Error('Too big index.');
        }

        if(index === this.length) {
            this.append(data);
        } else {
            let iteratorIndex = this.length - 1;
            for (const element of list) {
                if (index === iteratorIndex) {
                    let current = element;
                    let previous = current.prev;

                    const newest = new Element(data);
                    newest.prev = previous;
                    newest.next = current;

                    previous.next = newest;
                    current.prev = newest;

                    return this;
                }
                iteratorIndex--;
            }
        }
    }
}

