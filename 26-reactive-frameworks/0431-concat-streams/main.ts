import { concat, of, Observable } from 'rxjs';

const first$: Observable<number> = of(1, 2);
const second$: Observable<number> = of(3, 4);

concat(first$, second$).subscribe({
  next: (v: number): void => console.log(v),
  complete: (): void => {},
});
