import { from, Observable } from 'rxjs';
import { scan } from 'rxjs/operators';

const source$: Observable<number> = from([1, 2, 3, 4]);

source$
  .pipe(scan((acc: number, v: number): number => acc + v, 0))
  .subscribe({
    next: (v: number): void => console.log(v),
    complete: (): void => {},
  });
