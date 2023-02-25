

function receivesAFunction(cb) {
    return cb();
}

function returnsANamedFunction() {
    return receivesAFunction;
}

function returnsAnAnonymousFunction() {
    return function() {};
}