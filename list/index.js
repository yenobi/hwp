class Element {
    constructor(data) {
        this.data = data || null; 
        this.prev = null;
        this.next = null;
    }
}

class List {
    constructor() {}

    append(data) {
        const newest = new Element(data);
        if (this.current) this.current.next = newest;
        newest.prev = this.current;
        this.current = newest;
    }
}
