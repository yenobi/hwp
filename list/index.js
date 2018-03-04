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
                   const data = current.data;
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
}
