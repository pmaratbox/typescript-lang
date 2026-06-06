import { TestScheduler } from 'rxjs/testing';
import { timer, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const s = new TestScheduler(() => {});

// A emits 1 at t10 and 2 at t30 on the virtual scheduler.
const aStream$: Observable<number> = new Observable<number>((sub) => {
  const sa = timer(10, s).subscribe(() => sub.next(1));
  const sb = timer(30, s).subscribe(() => sub.next(2));
  return () => {
    sa.unsubscribe();
    sb.unsubscribe();
  };
});

// B emits 10 at t20.
const bStream$: Observable<number> = timer(20, s).pipe(map((): number => 10));

// combineLatest emits the latest pair whenever either source emits,
// once both have produced a value -> (1,10)@t20, (2,10)@t30.
combineLatest([aStream$, bStream$]).subscribe({
  next: ([x, y]: [number, number]): void => {
    console.log(`(${x}, ${y})`);
  },
});

s.flush();
