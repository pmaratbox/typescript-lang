import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

// Unbounded source of naturals 1, 2, 3, ...
const naturals$: Observable<number> = new Observable<number>((subscriber) => {
  let n: number = 1;
  while (!subscriber.closed) {
    subscriber.next(n);
    n += 1;
  }
});

naturals$.pipe(take(3)).subscribe({
  next: (v: number): void => console.log(v),
  complete: (): void => console.log('completed'),
});
