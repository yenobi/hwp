class Element {
    constructor(obj) {
        this.data = obj; 
        this.next = false;
    }

    addNext(el) {
        this.next = el;
    }
}

class List {
    constructor() {
        this.data = null;
        this.prev = null;
    }

    append(data) {
        if (this.data) {
            const prev = {
                data: this.data,
                next: null
            };
            this.prev = prev;
            this.data = data;
        } else {
            this.data = data;
        }
    }
}

