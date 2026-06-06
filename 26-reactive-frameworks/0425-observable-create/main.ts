import { of } from 'rxjs';

of(1, 2, 3).subscribe({
  next: (v: number) => console.log(v),
  complete: () => console.log('done'),
});
