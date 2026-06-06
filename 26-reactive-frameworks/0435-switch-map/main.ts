import { TestScheduler } from 'rxjs/testing';
import { timer, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

const scheduler = new TestScheduler(() => {});

// outer emits 1@10 and 2@20
const outer$: Observable<number> = new Observable<number>((subscriber) => {
  const a = timer(10, scheduler).pipe(map((): number => 1));
  const b = timer(20, scheduler).pipe(map((): number => 2));
  const subs = [
    a.subscribe((v: number) => subscriber.next(v)),
    b.subscribe((v: number) => subscriber.next(v)),
  ];
  return () => subs.forEach((s) => s.unsubscribe());
});

// inner(n) emits n at +5 and n*10 at +30; switchMap cancels the previous
// inner when a new outer arrives, so inner(1)'s 10@40 never fires.
outer$
  .pipe(
    switchMap((n: number): Observable<number> =>
      new Observable<number>((subscriber) => {
        const inner = [
          timer(5, scheduler)
            .pipe(map((): number => n))
            .subscribe((v: number) => subscriber.next(v)),
          timer(30, scheduler)
            .pipe(map((): number => n * 10))
            .subscribe((v: number) => subscriber.next(v)),
        ];
        return () => inner.forEach((s) => s.unsubscribe());
      }),
    ),
  )
  .subscribe({
    next: (v: number): void => console.log(v),
    complete: (): void => {},
  });

scheduler.flush();
