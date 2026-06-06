import { from, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

const source$: Observable<number> = from([1, 2, 3, 4, 5, 6]);

source$
  .pipe(filter((v: number): boolean => v % 2 === 0))
  .subscribe({
    next: (v: number): void => console.log(v),
    complete: (): void => {},
  });
