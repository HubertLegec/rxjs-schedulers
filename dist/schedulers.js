"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const observable = new rxjs_1.Observable((observer) => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();
}).pipe(operators_1.observeOn(rxjs_1.asyncScheduler));
console.log('just before subscribe');
observable.subscribe({
    next(x) {
        console.log('got value ' + x);
    },
    error(err) {
        console.error('something wrong occurred: ' + err);
    },
    complete() {
        console.log('done');
    }
});
console.log('just after subscribe');
//# sourceMappingURL=schedulers.js.map