import { of } from 'rxjs';
import { map } from 'rxjs/operators';

of(1, 2, 3, 4)
  .pipe(map((x: number) => x * 2))
  .subscribe({
    next: (v: number) => console.log(v),
  });
