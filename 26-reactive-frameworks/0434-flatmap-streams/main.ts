import { TestScheduler } from 'rxjs/testing';
import { timer, merge, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

const scheduler = new TestScheduler(() => {});

// outer emits 1@10, 2@20
const outer$: Observable<number> = merge(
  timer(10, scheduler).pipe(map((): number => 1)),
  timer(20, scheduler).pipe(map((): number => 2)),
);

// map each outer value n to a timed inner: n at +5, n*10 at +30
const inner = (n: number): Observable<number> =>
  merge(
    timer(5, scheduler).pipe(map((): number => n)),
    timer(30, scheduler).pipe(map((): number => n * 10)),
  );

outer$
  .pipe(mergeMap((n: number): Observable<number> => inner(n)))
  .subscribe({
    next: (v: number): void => console.log(v),
    complete: (): void => {},
  });

scheduler.flush();
