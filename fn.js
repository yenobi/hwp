'use strict';

const node = (data) => {
  const element = (data) => {
    const next = node(data);
    next.prev = element;
    return next;
  };
  element.data = data;
  return element;
};

// Usage

const obj1 = { name: 'first' };
const obj2 = { name: 'second' };
const obj3 = { name: 'third' };

// const list = node(obj1)(obj2)(obj3);
const list = node(obj1)(obj2);
// const list = node();

console.dir(list, { depth: 3 });

/*
const node = (data, element) => (element = Object.assign(
  (data) => Object.assign(node(data), { prev: element }), { data }
));
*/