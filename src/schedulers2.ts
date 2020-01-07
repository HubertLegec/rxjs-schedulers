import { asapScheduler, asyncScheduler, merge, of, queueScheduler } from 'rxjs';
import { filter, subscribeOn } from 'rxjs/internal/operators';


const async = of('async')
    .pipe(
        subscribeOn(asyncScheduler)
    );

const asap = of('asap')
    .pipe(
        subscribeOn(asapScheduler)
    );

const queue = of('queue')
    .pipe(
        subscribeOn(queueScheduler)
    );


merge(async, asap, queue)
    .pipe(
        filter(x => !!x)
    )
    .subscribe(console.log);

console.log('after subscription');
