const compose = (...funcs) => x => funcs.reduce((x, fn) => fn(x), x);

const sum = (x,y) => x + y;
const makeCoolString = x => `Value of cool string is ${x}`;
const makeArrCopy = arr => arr.slice(0);

const log = x => console.log(x);

const arr = [0,1,2,3,4];

//console.log(arr.reduce(sum));
//console.log(makeArrCopy(arr));
const verySimpleExample = (fn) => {
    return x => fn(x);
}

//verySimpleExample(log)(arr);

const simpleCompose = (...severalFunctions) => {
    return (x) => {
        let intRes = null;
        for (let i = 0; i < severalFunctions.lengths; i++) {
            console.dir(severalFunctions[i]);
            console.log(intRes);
            intRes = intRes ? severalFunction[i](intRes) : severalFunction[i](x);
            //intRes = severralFunctions[i](intRes || x);
        }
        return intRes;
        //severalFunctions.forEach(fn => intermediateResult = fn(x));
    }
}


//log(simpleCompose(sum, makeCoolString)(arr));

const exp = simpleCompose(sum, makeCoolString);

log(simpleCompose(sum, makeCoolString)(arr));
