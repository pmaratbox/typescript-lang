import { TestScheduler } from 'rxjs/testing';
import { timer, merge, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const scheduler = new TestScheduler(() => {});

scheduler.run(() => {
  const a$: Observable<number> = merge(
    timer(10, scheduler).pipe(map((): number => 1)),
    timer(30, scheduler).pipe(map((): number => 3)),
    timer(50, scheduler).pipe(map((): number => 5)),
  );

  const b$: Observable<number> = merge(
    timer(20, scheduler).pipe(map((): number => 2)),
    timer(40, scheduler).pipe(map((): number => 4)),
    timer(60, scheduler).pipe(map((): number => 6)),
  );

  merge(a$, b$).subscribe({
    next: (v: number): void => console.log(v),
    complete: (): void => {},
  });
});
