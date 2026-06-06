import { zip, of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const a$: Observable<number> = of(1, 2, 3);
const b$: Observable<number> = of(10, 20, 30);

const zipped$: Observable<number> = zip(a$, b$).pipe(
  map(([a, b]: [number, number]): number => a + b),
);

zipped$.subscribe({
  next: (v: number): void => console.log(v),
  complete: (): void => {},
});
