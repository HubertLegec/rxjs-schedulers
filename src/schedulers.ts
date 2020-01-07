import { asyncScheduler, asapScheduler, queueScheduler, of } from 'rxjs';
import { observeOn } from 'rxjs/operators';

const observable = of(1, 2, 3).pipe(
    observeOn(asyncScheduler)
);

console.log('just before subscribe');
observable.subscribe({
  next(x) {
    console.log('got value ' + x)
  },
  error(err) {
    console.error('something wrong occurred: ' + err);
  },
  complete() {
    console.log('done');
  }
});
console.log('just after subscribe');
