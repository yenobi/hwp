// class List {
//     constructor(obj) {
//         this.data = obj || {};
//     }

//     add(obj) {
//         if (this.data) {
//             // add obj to next field of curr 
//             this.data.next = obj;
//         } else {
//             this.data = obj;
//         }
//         // this.list.push(new Element(obj));
//         // return this.list;
//         this.list.push({
//             data: obj,
//             last: true,
//             next: 'ref to next el'
//         })
//     }
// }

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
        // if data is not empty => have alrady had an element so
        // 1. need to pass current data to prev 
        // 2. need to save data 
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

// const list = new List();
// list => {data: null, prev: null}
// list.add(obj1);
// list => {data: obj1, prev: null}
// list.add(obj2);
// list => {data: obj2, prev: {data: obj1, prev: null}}
list.add(obj3);