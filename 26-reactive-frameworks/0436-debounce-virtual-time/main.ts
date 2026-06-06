import { TestScheduler } from 'rxjs/testing';
import { timer, merge, Observable } from 'rxjs';
import { map, debounce } from 'rxjs/operators';

const scheduler = new TestScheduler(() => {});

// source emits a@10, b@20, c@100, then completes LATE (@130) so the
// trailing c survives its quiet window.
const source$: Observable<string> = new Observable<string>((subscriber) => {
  const subs = merge(
    timer(10, scheduler).pipe(map((): string => 'a')),
    timer(20, scheduler).pipe(map((): string => 'b')),
    timer(100, scheduler).pipe(map((): string => 'c')),
  ).subscribe((v: string): void => subscriber.next(v));
  const done = timer(130, scheduler).subscribe((): void => subscriber.complete());
  return () => {
    subs.unsubscribe();
    done.unsubscribe();
  };
});

// debounce each value by a quiet window of 30 virtual time units:
// a@10 is replaced by b@20 (gap 10 < 30); b emits after the long gap to c;
// c is flushed by the trailing-emit-on-complete at t130.
source$
  .pipe(debounce((): Observable<number> => timer(30, scheduler)))
  .subscribe({
    next: (v: string): void => console.log(v),
    complete: (): void => {},
  });

scheduler.flush();
