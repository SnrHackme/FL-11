function pipe(x) {
    for (let i = 1; i < arguments.length; i++) {
        x = arguments[i](x);
    }
    return x;
}
function addOne(x) {
    return 1 + x;
}
pipe(1,addOne);
pipe(1,addOne,addOne);