export function add (...args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        if (typeof args[i] !== 'number') {
            throw new Error('All arguments must be numbers');
        }
        sum += args[i];
    }
    return sum;
}

//module.exports = { add };